import { Message } from "./Message";
export const MessageList = () => {
  const messages = [
    { name: "Francesco", text: "Ciao come stai" },
    { name: "Alessandro", text: "Tutto bene" },
    { name: "Andrea", text: "Bene" },
  ];

  return(
  
    messages.map((text, name)) => {
    return <Message name={name}>{text}</Message>;
  })
;
  
 
  
  
};
