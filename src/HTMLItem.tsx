import React from "react";
import ContractItem from "./ContractItem";

export type HTMLItemArgs = {
    elementNode: ElementNode
}

export function createStyle(style: StyleMixin) {
    const res: React.CSSProperties = {}
    if (style.bold !== undefined) {
        res.fontWeight = style.bold ? "bold" : "normal";
    }
    if (style.underline !== undefined) {
        res.textDecoration = style.underline ? "underline" : "none";
    }
    if (style.italic !== undefined) {
        res.fontStyle = style.italic ? "italic" : "normal";
    }
    return res;
}


function HTMLItem({ elementNode }: HTMLItemArgs) {
    let style = createStyle(elementNode);
    style = { ...style, padding: "0", margin: "0", whiteSpace: "pre-wrap" }
    const children = elementNode.children.map((child) => ContractItem({ elementNode: child }))
    const type = elementNode.type === "block" ? "div" : elementNode.type;
    return React.createElement(type, { style }, children);
}


export default HTMLItem;