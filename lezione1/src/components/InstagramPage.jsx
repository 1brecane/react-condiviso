import { UserPanel } from "./UserPanel";
import { Images } from "./Images";
import img_pasquale from ".././img/pasqualecannata.jpg";
import focaccia1_img from ".././img/focaccia.jpg";
import focaccia2_img from ".././img/focaccia2.jpg";
import cookies_img from "..//./img/cookies.jpg";

export const InstagramPage = () => {
  return (
    <div>
      <UserPanel
        image={img_pasquale}
        isVerified={false}
        isStory={true}
        isValid={true}
        posts={"4,179"}
        followers={"510K"}
        following={"836"}
      >
        _pasqualecannata
      </UserPanel>
      <div
        style={{
          display: "flex",
          gap: "3px",
          justifyContent: "center",
          marginTop: "3px",
        }}
      >
        <Images image={focaccia1_img}></Images>
        <Images image={cookies_img}></Images>
        <Images image={focaccia2_img}></Images>
      </div>
    </div>
  );
};
