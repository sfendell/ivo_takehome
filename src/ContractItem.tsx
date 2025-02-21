import ClauseItem from "./ClauseItem";
import HTMLItem from "./HTMLItem";
import MentionItem from "./MentionItem";
import TextItem from "./TextItem";

export type ContractItemArgs = {
    elementNode: any
}

function ContractItem({ elementNode }: ContractItemArgs) {
    if ("text" in elementNode) {
        return (<TextItem elementNode={elementNode} />);
    }
    switch (elementNode.type) {
        case 'clause':
            return (<ClauseItem elementNode={elementNode} />);
        case 'mention':
            return (<MentionItem elementNode={elementNode} />);
        default:
            return (<HTMLItem elementNode={elementNode} />)
    }
}

export default ContractItem;