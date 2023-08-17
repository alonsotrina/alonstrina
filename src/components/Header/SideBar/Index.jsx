/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { SideBar } from './styled'

const Index = () => {
  return (
    <SideBar>
    <ul>
      <li><Link to="/dashboard">Inicio</Link></li>
      <li><Link to="/dashboard/character">character</Link></li>
      <li><Link to="/dashboard/location">location</Link></li>
      <li><Link to="/dashboard/episode">episode</Link></li>
    </ul>
  </SideBar>

  )
}

export default Index