/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import { SideBar, Nav, Logo, BtnAction } from './styled'
import { MdClose } from "react-icons/md";
import imagen1 from '../../assets/logo.png';

const Index = ({ open, handleClick }) => {
  const location = useLocation();
  return (
    <SideBar open={open}>

      <BtnAction 
        variant="danger" 
        onClick={handleClick}
      >
        <MdClose />
      </BtnAction>

      <Logo>
        <img src={imagen1} alt="Imagen 1" />
      </Logo>
      <Nav>
        <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''} onClick={open && handleClick}>Home</Link></li>
        <li><Link to="/dashboard/character" className={location.pathname === '/dashboard/character' ? 'active' : ''} onClick={open && handleClick}>Character</Link></li>
        <li><Link to="/dashboard/location" className={location.pathname === '/dashboard/location' ? 'active' : ''} onClick={open && handleClick}>Location</Link></li>
        <li><Link to="/dashboard/episode" className={location.pathname === '/dashboard/episode' ? 'active' : ''} onClick={open && handleClick}>Episode</Link></li>
      </Nav>
    </SideBar>

  )
}

export default Index