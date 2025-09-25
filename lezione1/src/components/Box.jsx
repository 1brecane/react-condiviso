const styleMap = {
    classic: { border: "1px solid black"},
    bold: {border: "1px solid black", fontWeight: "bold", color: "black" }
}

export const Box = ({children, variant}) => {
    return (
      <div style={styleMap[variant]}>
          {children}
      </div>
    );
  };
  