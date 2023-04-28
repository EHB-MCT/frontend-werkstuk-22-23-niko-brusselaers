
class NavVariants {

    bottomContainer = {
        open: {
            height: "40em",
        },
        closed: {
            top: "2em",
            height: "7em",
            paddingTop: "0",
            justifyContent:"space-between",
            backgroundColor:"rgba(255,255,255,0)"
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