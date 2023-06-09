
class NavVariants {

  bottomContainer = {
    open: {
      height: "40em",
    },
    closed: {
      top: "2em",
      height: "8em",
      paddingTop: "0",
      justifyContent: "space-between",
      backgroundColor: "rgba(255,255,255,0)",
    },
  };

  catagoriesBar = {
    open: {
      backgroundColor: "rgba(255,255,255,0)",
    },
    closed: {
      backgroundColor: "#ffffff",
    },
  };

  show = {
    open: {
      display: "block",
      opacity: "1",
    },
    closed: {
      display: "none",
      opacity: "0",
    },
  };
}

export const navVariants = new NavVariants();