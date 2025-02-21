import ContractItem from "./ContractItem";
import { createStyle } from "./HTMLItem";

type ClauseItemArgs = {
    elementNode: ClauseNode;
}

function ClauseItem({ elementNode }: ClauseItemArgs) {
    let style = createStyle(elementNode);
    style = { ...style, marginTop: "20px" }
    let clauseName = elementNode.depth && elementNode.depth % 2 ? `${elementNode.order}.` : `(${elementNode.order})`;
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "start", gap: "8px", ...style }}>
            <p style={{ margin: 0 }}>{clauseName}</p>
            <ol style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", listStyle: "none" }}>
                {elementNode.children.map((child, index) => (
                    <ContractItem elementNode={child} key={index} />
                ))}
            </ol>
        </div>
    );
}

export default ClauseItem;