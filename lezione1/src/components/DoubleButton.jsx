const colorButton = {
    blue: {
        backgroundColor: "rgb(46, 158, 255)",
        color: "rgb(255, 255, 255)",
        border: "1px solid rgb(242, 242, 242)",
        borderRadius: "7px",
        fontWeight: "bold",
        fontSize: "10px",
        padding: "7px 12px",
        cursor: "pointer",
    },

    white: {
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(0, 0, 0)",
        border: "1px solid rgb(242, 242, 242)",
        borderRadius: "7px",
        fontWeight: "bold",
        fontSize: "10px",
        padding: "7px 12px",
        cursor: "pointer",
    },
};

export const DoubleButton = ({
    isRow = true,
    isInverted = false,
    children,
    onClickRight,
    onClickLeft,
}) => {
    const getFlexDirection = () => {
        if (isRow && isInverted) {
            return "row-reverse";
        } else if (isRow && !isInverted) {
            return "row";
        } else if (isInverted) {
            return "column-reverse";
        } else {
            return "column";
        }
    };

    return (
        <div
            style={{
                display: "flex",
                gap: 12,
                flexDirection: getFlexDirection(),
            }}
        >
            <button
                style={colorButton.white}
                onClick={() => {
                    onClickLeft();
                }}
            >
                {" "}
                Indietro{" "}
            </button>

            <button
                style={colorButton.blue}
                onClick={() => {
                    onClickRight();
                }}
            >
                {children}
            </button>
        </div>
    );
};
