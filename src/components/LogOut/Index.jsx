/* eslint-disable react/prop-types */
// import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from './styled'
// import { AuthContext } from '../../context/AuthContextProvider';

const Index = () => {
  // const { Auth, setisAuth, token, setLoading, setResponse } = useContext(AuthContext);



  // const handleSignOff = () => {
  //   setisAuth(false)
  //   setLoading(false)
  //   setResponse(null)
  // }

  return (
     <Content>
      {/* <h1> bienvenido: {token}---</h1>
      {Auth && <button onClick={handleSignOff}>Log Out</button>}

      <h1>Character List</h1> */}
      <Outlet />
    </Content>

  )
}

export default Index