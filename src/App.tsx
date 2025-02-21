import { useEffect, useState } from 'react';
import ContractItem from './ContractItem';
import React from 'react';

const App = () => {
  const [fileContent, setFileContent] = useState<RootDocument>([]);

  useEffect(() => {
    fetch('http://localhost:4000/read-file')
      .then(response => response.json())
      .then((data) => {
        const parsedContent = JSON.parse(data.content);

        const assignClauseNumbers = (node: any, depth: number = 0, order: number = 1) => {
          if (node.type && node.type === "clause") {
            (node as ClauseNode).depth = depth;
            (node as ClauseNode).order = order;
          }

          if (node.children && Array.isArray(node.children)) {
            let clauseOrder = 1
            node.children.forEach((child: any) => {
              if (child.type === "clause") {
                assignClauseNumbers(child, depth + 1, clauseOrder++);
              } else {
                assignClauseNumbers(child, depth, 0)
              }
            });
          }
        };

        parsedContent.forEach((node: any) => assignClauseNumbers(node, 0, 1));
        setFileContent(parsedContent);
      }).catch(error => console.error('Error fetching file:', error));
  }, []);

  return (
    <div style={{ padding: "0px 16px 0px 16px" }}>
      {fileContent.map((elementNode, index) => (<ContractItem elementNode={elementNode} key={index} />))}
    </div>
  );
}

export default App;
