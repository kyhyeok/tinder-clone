import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([
    {
      name: "Naeun",
      image:
        "https://i.pinimg.com/564x/ce/7d/c3/ce7dc341949109d8a5d0d8f50c2b1c59.jpg",
      message: "안녕하세요"
    },
    {
      name: "Naeun",
      image:
        "https://i.pinimg.com/564x/ce/7d/c3/ce7dc341949109d8a5d0d8f50c2b1c59.jpg",
      message: "친하게 지내고 싶어요~"
    },
    {
      message: "친하게 지내요!"
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessage([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH Naeun ON 09/03/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chatScreen__inputField"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
