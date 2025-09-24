export const Message = ({ name, children, color, onCLickMessage }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: 4,
        borderRadius: 10,
        border: "1px solid grey",
        margin: "10px 10px 10px",
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "20px" }}> {name}</p>

      <p
        onClick={() => {
          onCLickMessage();
        }}
        style={{
          color: "rgb(101, 101, 101)",
          cursor: "pointer",
        }}
      >
        {children}
      </p>
    </div>
  );
};
