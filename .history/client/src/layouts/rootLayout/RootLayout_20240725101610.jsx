import { Link } from "react-router-dom"


const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to= "/">
          {/* <img src="/logo-queen-crown.png" alt="logo" /> */}
          <span>🪐 💫 A.I. AI 🪐</span>
        </Link>
      </header>
    </div>
  )
}

export default RootLayout
