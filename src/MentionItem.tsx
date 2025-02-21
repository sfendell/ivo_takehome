type MentionItemArgs = {
    elementNode: MentionNode;
}

function MentionItem({ elementNode }: MentionItemArgs) {
    return (<span style={{ backgroundColor: elementNode.color, color: 'white', borderRadius: '4px', fontSize: 14, padding: "1px 3px 1px 3px" }}> {elementNode.value}</span >)
}


export default MentionItem;