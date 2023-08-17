import { useState } from "react";
import { Dashboard } from "./styled"
import SideBar from "../../components/SideBar/Index"
import DashboardContent from "../../components/DashboardContent/Index"

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar =() => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <Dashboard> 
      <SideBar open={isSidebarOpen} handleClick={handleSidebar}/>
      <DashboardContent handleClick={handleSidebar}/>
    </Dashboard>
  )
}

export default Index