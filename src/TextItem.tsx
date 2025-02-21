import { createStyle } from "./HTMLItem";

export type TextItemArgs = {
    elementNode: TextNode
}

function TextItem({ elementNode }: TextItemArgs) {
    return <span style={createStyle(elementNode)}>{elementNode.text}</span>;
}

export default TextItem;