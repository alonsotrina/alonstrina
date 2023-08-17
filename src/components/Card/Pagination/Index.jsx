/* eslint-disable react/prop-types */
import Pagination from 'react-bootstrap/Pagination';

const Index = ({prev, next, onPrevious, onNext}) => {

  return (
    <Pagination>
      { prev &&  <Pagination.Prev onClick={onPrevious}/> }
      { next && <Pagination.Next onClick={onNext}/> }
    </Pagination>
  )
}

export default Index