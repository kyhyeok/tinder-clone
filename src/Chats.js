import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Naeun"
        message="안녕하세요!"
        timestamp="30 seconds ago"
        profilePic="https://i.pinimg.com/564x/ce/7d/c3/ce7dc341949109d8a5d0d8f50c2b1c59.jpg"
      />
      <Chat
        name="Seulgi"
        message="빨간맛!"
        timestamp="55 seconds ago"
        profilePic="https://i.pinimg.com/564x/50/d8/2a/50d82a4b5ceb541c36e479ac531ca459.jpg"
      />
      <Chat
        name="Dahyun"
        message="TT!"
        timestamp="15 minutes ago"
        profilePic="https://i.pinimg.com/564x/d2/bb/78/d2bb783d3d558b45ad0b1b569409f1a6.jpg"
      />
      <Chat
        name="Jenny"
        message="솔로!"
        timestamp="1 hours ago"
        profilePic="https://i.pinimg.com/564x/20/c2/23/20c223fa95bf61fb9739834d3ca00c16.jpg"
      />
    </div>
  );
}

export default Chats;
