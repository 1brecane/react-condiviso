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

export const Button = ({ children, variant, onCLickButton }) => {
  return (
    <div>
      <button
        style={colorButton[variant]}
        onClick={() => {
          onCLickButton();
        }}
      >
        {children}
      </button>
    </div>
  );
};
