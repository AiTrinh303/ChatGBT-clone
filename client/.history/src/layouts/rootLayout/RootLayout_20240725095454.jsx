import { Link } from "react-router-dom"


const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to= "/">
          <img src="/lo" alt="" />
        </Link>
      </header>
    </div>
  )
}

export default RootLayout
