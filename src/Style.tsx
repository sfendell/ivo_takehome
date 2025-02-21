export function createStyle(style: StyleMixin) {
    return {
        fontWeight: style.bold ? "bold" : "normal",
        textDecoration: style.underline ? "underline" : "none",
        fontStyle: style.italic ? "italic" : "normal",
        whiteSpace: "pre-wrap",
    } as React.CSSProperties;
}