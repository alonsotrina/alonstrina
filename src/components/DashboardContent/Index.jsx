/* eslint-disable react/prop-types */
// import { useContext } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { Outlet } from 'react-router-dom';
import { Content, NavBar, MenuToggleButton } from './styled'
import { useLocation } from 'react-router';
import { MdMenu, MdOutlineLogout } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Wrapper from "../WrapperContainer/Index";
import CardImage from '../Card/CardImage/Index'
import backgroundImage from "../../assets/bg-login.jpeg";
import backgroundImage2 from "../../assets/bg-register.jpeg";
import backgroundImage3 from "../../assets/bg-404.jpeg";

const ContentDashboard = () => {
  return (
    <Wrapper>
      <Row className="my-5">
        <Col xs={12} md={4} xl={4} xxl={4}>
          <CardImage
              image={backgroundImage}
              title="Character List"
              bg="danger"
              link="/dashboard/character"
          />
        </Col>
        <Col xs={12} md={4} xl={4} xxl={4}>
          <CardImage
              image={backgroundImage2}
              title="Location List"
              bg="info"
              link="/dashboard/location"
          />
        </Col>
        <Col xs={12} md={4} xl={4} xxl={4}>
          <CardImage
              image={backgroundImage3}
              title="Episode List"
              bg="warning"
              link="/dashboard/episode"
          />
        </Col>
      </Row>
    </Wrapper>
  );
};


const Index = ({ handleClick }) => {
  const location = useLocation();
  const { Auth, setisAuth, setLoading, setResponse, email } = useContext(AuthContext);

  const handleLogOut = () => {
    setisAuth(false)
    setLoading(false)
    setResponse(null)
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }


  return (
    <Content>
      <NavBar>
        <div>
          <MenuToggleButton
            variant="dark"
            onClick={handleClick}
          >
            <MdMenu />
          </MenuToggleButton>
          <h6 className='fs-6 fw-bold text-body-secondary m-0'> Hola: {email}</h6>
        </div>

        {Auth &&
          <Button
            variant="light"
            onClick={handleLogOut}
          >
            <MdOutlineLogout />
          </Button>
        }
      </NavBar>

      {
        location.pathname != '/dashboard' ? <Outlet /> : <ContentDashboard />
      }
    </Content>

  )
}

export default Index