/* eslint-disable react/prop-types */
import { MsgError, Label, InputIcon } from "./styled"
import { Form, InputGroup, } from 'react-bootstrap';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Index = ({ type, label, placeholder, value, onChange, name, handleBlur, validations, ShowPass }) => {
  return (
    <>
      <Label className={`${validations ? "text-danger" : ''}`}>{label}</Label>
      <InputIcon>
        <Form.Control
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={handleBlur}
          className={`${validations ? "is-invalid" : ''}`}
        />
        <InputGroup.Text>
          {ShowPass.show ? <AiOutlineEye onClick={ShowPass.handleHide} /> : < AiOutlineEyeInvisible onClick={ShowPass.handleShow} />}
        </InputGroup.Text>
      </InputIcon>

      <MsgError>{validations}</MsgError>
    </>
  )
}

export default Index