import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
  return (
    <div className="dashboardLayout">
      <div className="menu"><ChatList/></div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
