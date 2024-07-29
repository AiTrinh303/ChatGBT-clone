import { useEffect, useRef } from "react";
import "./chatPage.css";

const ChatPage = () => {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div> 

          <Ne
          <div ref={endRef}></div>         
        </div>
      </div>
    </div>
  )
}

export default ChatPage
