import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore A.I.</Link>
      <Link to="/">Contact</Link>
      <hr />
      
    </div>
  )
}

export default ChatList
