import { useEffect, useRef } from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  const endRef = useRef(null);

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message</div>
          <div className="message user">Test message from user</div> 

          <NewPrompt />
          <div ref={endRef}></div>         
        </div>
      </div>
    </div>
  )
}

export default ChatPage
