import { Thypography } from "./Typography";
export const TypographyButton = (props) => {
    return (
    <div>
      <Thypography >{props.label}</Thypography>
      {props.children}
      <button>{props.textButton}</button>
    </div>


    );
  };