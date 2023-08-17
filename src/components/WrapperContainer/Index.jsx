/* eslint-disable react/prop-types */
import { Container } from 'react-bootstrap';

const Index = ({ children }) => {
  return (
    <Container fluid className="px-4 px-md-5">
      {children}
    </Container>

  )
}

export default Index