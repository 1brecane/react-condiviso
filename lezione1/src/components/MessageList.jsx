import { Message } from "./Message";
export const MessageList = () => {
  const messages = [
    { name: "Francesco", text: "Ciao come stai" },
    { name: "Alessandro", text: "Tutto bene" },
    { name: "Andrea", text: "Bene" },
  ];

  return messages.map((message, index) => {
    return (
      <Message key={index} name={message.name}>
        {message.text}
      </Message>
    );
  });
};
