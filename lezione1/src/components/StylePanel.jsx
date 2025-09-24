import logoimg from "./../logo.svg";

export const StylePanel = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "300px",
          display: "grid",
          placeItems: "center",
          alignItems: "center",
          backgroundColor: "#b6b6b6",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Immagine */}
        <div
          style={{
            width: "100px",
            height: "100px",
          }}
        >
          <img
            src={logoimg}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        </div>

        <div
          style={{
            width: "900px",
            height: "800px",
            borderRadius: "50%",
            backgroundColor: "#7a7a7a",
            position: "absolute",
            left: "60%",
            top: "10%",
          }}
        ></div>

        <div
          style={{
            width: "600px",
            height: "400px",
            borderRadius: "50%",
            backgroundColor: "#e6e6e6",
            position: "absolute",
            right: "70%",
            bottom: "30%",
          }}
        ></div>
      </div>
    </div>
  );
};
