

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore AI</Link>
      <Link to="/">Contact</Link>
    </div>
  )
}

export default ChatList
