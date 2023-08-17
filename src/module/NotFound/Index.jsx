import { Page, PageContent } from './styled'
import { Link } from 'react-router-dom';
import backgroundImage from "../../assets/rick_morty_PNG10.png";
import { AuthContext } from '../../context/AuthContextProvider';
import { useContext } from 'react';

const Index = () => {
  const { email } = useContext(AuthContext);

  console.log('page 404', email)
  return (
    <Page>

      <PageContent>
        <img src={backgroundImage} alt='página 404' />
        <h1 className='fw-bold text-light fst-italic'>404</h1>
        <h4 className='fw-bold text-light'>Página no encontrada</h4>
        {
          email ? <Link to="/dashboard">Volver al login</Link> : <Link to="/login">Volver al login</Link>
        }
      </PageContent>
    </Page>
  )
}

export default Index