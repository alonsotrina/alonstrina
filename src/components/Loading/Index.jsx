/* eslint-disable react/prop-types */
import { Loading } from './styled';
import Logo from '../../assets/logo.png';
const Index = () => {
  return (
    <Loading>
      <img src={Logo} className="loading-animate" alt="Imagen 1" />
    </Loading>

  )
}

export default Index