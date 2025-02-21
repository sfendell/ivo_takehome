type StyleMixin = {
    bold?: boolean;
    underline?: boolean;
    italic?: boolean;
}

type ClauseNode = {
    type: "clause";
    children: (ContentNode)[];
    order?: number;
    depth?: number;
} & StyleMixin;

type TextNode = {
    text: string;
} & StyleMixin;

type MentionNode = {
    type: "mention";
    title: string;
    color: string;
    variableType?: string;
    id: string;
    value: string;
    children: TextNode[];
} & StyleMixin;

type ElementNode = {
    title?: string;
    type: "block" | "clause" | "p" | "h1" | "h4" | "ul" | "li" | "lic";
    children: (ContentNode)[];
} & StyleMixin;

type ContentNode = TextNode | ElementNode | MentionNode | ClauseNode

type RootDocument = ContentNode[];
