import { globalCss } from "@stitches/core";

export const globalStyles = globalCss({
  "*": {
    padding: "0",
    margin: "0",
    border: "none",
    listStyle: "none",
    outline: "none",
    borderRadius: "10rem",
    textDecoration: "none",
    boxSizing: "border-box",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontFamily: "Inter",
  },
  "html, body": {
    fontSize: "62.5%",
    background: "#151515",
  },
  img: {
    display: "block",
    width: "100%",
  },
});
