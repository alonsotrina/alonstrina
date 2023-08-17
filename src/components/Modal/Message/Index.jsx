/* eslint-disable react/prop-types */
import Toast from 'react-bootstrap/Toast';

const Index = ({ close, open, msg, bgColor }) => {
  return (
    <Toast onClose={close} show={open} delay={3000} autohide  bg={bgColor}>
    <Toast.Header>
    <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
  
    </Toast.Header>
    <Toast.Body>{msg}</Toast.Body>
  </Toast>

  )
}

export default Index