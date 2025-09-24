export const Images = ({ image, onClickImage }) => {
  return (
    <div>
      <img
        style={{
          height: "300px",
          width: "100%",
          cursor: "pointer",
          objectFit: "cover",
        }}
        src={image}
        alt="post instagram"
      />
    </div>
  );
};
