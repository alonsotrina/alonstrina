/* eslint-disable react/prop-types */
import { MsgError, Label, Input } from "./styled"
import Form from 'react-bootstrap/Form';

const Index = ({ type, label, placeholder, value, onChange, name, handleBlur, validations }) => {
  return (
    <Form.Group className="mb-3">
      <Label className={`${validations ? "text-danger" : ''}`}>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
        className={`${validations ? "is-invalid" : ''}`}
      />

      <MsgError>{validations}</MsgError>
    </Form.Group>

  )
}

export default Index