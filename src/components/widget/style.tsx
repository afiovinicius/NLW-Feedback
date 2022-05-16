import { css } from "@stitches/core";

export const cWidget = css({
  position: "absolute",
  bottom: "1.6rem",
  right: "1.6rem",
  background: "transparent",
  ".btnSolid": {
    padding: "1.2rem",
    borderRadius: "5rem",
    background: "#8257E5",
    color: "#ffffff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "all 400ms linear",
    ".bw_text": {
      fontWeight: "500",
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      overflow: "hidden",
      maxWidth: "0",
      transition: "all 400ms linear",
    },
    "&:hover": {
      filter: "drop-shadow(0rem 0.8rem 2.4rem rgba(130, 87, 229, 0.25))",
      ".bw_text": {
        maxWidth: "13rem",
        marginLeft: "0.8rem",
      },
    },
  },
});
