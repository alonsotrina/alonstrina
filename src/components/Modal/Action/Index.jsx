/* eslint-disable react/prop-types */
import { Modal } from 'react-bootstrap';
import { Dialogs, Icon } from "./styled"
import { MdOutlineWarningAmber, MdOutlineCheckCircle} from "react-icons/md";


const Index = ({ close, show, msg, size, title, type }) => {

  const typeIcons = (type) => {
    const typeIcon = {
      success:  <Icon><MdOutlineCheckCircle className='success' /></Icon>,
      danger: <Icon><MdOutlineWarningAmber className='danger' /></Icon>,
      warning: <Icon><MdOutlineWarningAmber className='warning' /></Icon>
    }

    const typeIconDefult = ''

    const SearchIcon = typeIcon[type] || typeIconDefult
    return SearchIcon;
  }


  return (
    <Dialogs
      show={show}
      onHide={close}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className='text-center mb-5'>
        {typeIcons(type)}

        { title && <h4 className='fw-bold my-3'>{title}</h4>}
        <p className='m-0'>{msg}</p>
      </Modal.Body>

    </Dialogs>
  )
}

export default Index