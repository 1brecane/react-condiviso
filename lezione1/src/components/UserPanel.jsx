import verifiedicon from "./../img/verifiedicon.png";
import imgborder from "./../img/imgborder.png";
import { Thypography } from "./Typography";
import { Button } from "./Button";

const PanelStyle = {
  width: "500px",
  minHeight: "150px",
  borderRadius: "30px",
  backgroundColor: "white",

  display: "flex",
  alignItems: "center",
  padding: "15px",
};

const DivImg = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  overflow: "hidden",
};

const DivVerified = {
  marginLeft: "-35px",
  marginTop: "55px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  overflow: "hidden",
};

const DivImgBorder = {
  marginLeft: "-107.5px",
  width: "115px",
  height: "115px",
  borderRadius: "50%",
  overflow: "hidden",
};

const ImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const colorCard = {
  default: {
    boxShadow: "0px 0px 15px 2px rgba(23, 23, 23, 0.35)",
  },

  blue: {
    boxShadow: "0px 0px 15px 2px rgba(0, 72, 255, 0.5)",
    backgroundColor: "rgb(218, 221, 255)",
    border: "2px solid rgb(169, 175, 255)",
  },

  red: {
    boxShadow: "0px 0px 15px 2px rgba(250, 90, 90, 0.48)",
    backgroundColor: "rgb(253, 228, 228)",
    border: "2px solid rgb(249, 194, 194)",
  },

  green: {
    boxShadow: "0px 0px 15px 2px rgba(25, 83, 9, 0.45)",
    backgroundColor: "rgb(218, 255, 223)",
    border: "2px solid rgb(166, 217, 167)",
  },

  notValid: {
    filter: "grayscale(100%)",
    backgroundColor: "rgb(239, 237, 237)",
  },
};

export const UserPanel = ({
  job,
  image,
  children,
  isVerified,
  variant,
  isValid,
  isStory,
  posts,
  followers,
  following,
}) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div style={{ ...PanelStyle, ...colorCard[variant] }}>
        {/* Immagini utente */}
        <div style={DivImg}>
          <img src={image} alt="" style={ImgStyle} />
        </div>

        {/* Immagine contorno tipo instagram */}
        <div style={DivImgBorder}>
          {isStory && (
            <img
              src={imgborder}
              alt="Contorno immagine profilo"
              style={ImgStyle}
            />
          )}
        </div>

        {/* Immagine del verificato */}
        <div style={DivVerified}>
          {isVerified && (
            <img src={verifiedicon} alt="Verified" style={ImgStyle} />
          )}
        </div>

        {/* Testo */}
        <div style={{ marginLeft: "40px", flex: 1 }}>
          <div style={{ display: "flex", gap: "35px" }}>
            <p style={{ margin: "0", fontSize: "20px" }}>{children}</p>
            {/* Bottoni */}
            {isStory && (
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  variant={"blue"}
                  onCLickButton={() => {
                    alert("Hai seguito l'utente!");
                  }}
                >
                  Follow
                </Button>
                <Button
                  variant={"white"}
                  onCLickButton={() => {
                    alert("Messaggiami al +39 123 456 7890");
                  }}
                >
                  Message
                </Button>
              </div>
            )}
          </div>

          <div style={{ color: "grey", fontSize: "20px", margin: "15px 0 0" }}>
            {job}
            {!isValid && (
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                Utente non disponibile
              </p>
            )}
            <div>
              {isStory && (
                <div style={{ display: "flex", gap: "50px" }}>
                  <Thypography text={posts} variant={"text3"}>
                    posts
                  </Thypography>
                  <Thypography text={followers} variant={"text3"}>
                    followers
                  </Thypography>
                  <Thypography text={following} variant={"text3"}>
                    following
                  </Thypography>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
