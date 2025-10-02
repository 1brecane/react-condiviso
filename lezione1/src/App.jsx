import "./App.css";
import { Thypography } from "./components/Typography";
import { TypographyButton } from "./components/TypographyButton";
import { TitleSubtitle } from "./components/TitleSubtitle";
import { StylePanel } from "./components/StylePanel";
import { UserPanel } from "./components/UserPanel";
import { Button } from "./components/Button";
import { DoubleButton } from "./components/DoubleButton";
import { MessageList } from "./components/MessageList";
import { Box } from "./components/Box";
import { InstagramPage } from "./components/InstagramPage";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";

const App = () => {
    return (
        <>
            <DoubleButton
                onClickRight={() => alert("hai cliccato a destra")}
                onClickLeft={() => alert("hai cliccato a sinistra")}
            >
                Avanti
            </DoubleButton>
        </>
    );
};

export default App;
