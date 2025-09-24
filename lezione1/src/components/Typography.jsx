const styleMap = {
  title: { fontWeight: 600, fontSize: 24 },
  text1: { fontWeight: 400, fontSize: 20 },
  text2: { fontWeight: 300, fontSize: 16 },
  text3: { fontWeight: "bold", fontSize: 12, color: "black" },
};

export const Thypography = ({ text, children, variant }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <p style={styleMap[variant]}>{text}</p>
      <p style={{ fontSize: 12 }}>{children}</p>
    </div>
  );
};
