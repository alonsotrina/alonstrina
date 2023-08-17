/* eslint-disable react/prop-types */
import { Title, Span } from './styled'
import { Form, InputGroup } from 'react-bootstrap';
import { MdClear } from "react-icons/md";


const Index = ({ title, value, onChange, clearFilter }) => {
  return (
    <Title className='mt-5 mb-4'>
      <h3 className="fs-4 fw-bold m-0">{title}</h3>

      <InputGroup>
        <Form.Control
          placeholder="Filtrar"
          value={value}
          onChange={onChange}
        />

        {value &&

          <Span onClick={clearFilter}>
            <MdClear className='text-danger' />
          </Span>}
      </InputGroup>
    </Title>

  )
}

export default Index