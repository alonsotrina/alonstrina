/* eslint-disable react/prop-types */
import { ContentPagination, PaginatioLink } from './styled'
import Pagination from 'react-bootstrap/Pagination';

const Index = ({prev, next, onPrevious, onNext}) => {

  return (
    <ContentPagination>
      <PaginatioLink>
        { prev &&  <Pagination.Prev onClick={onPrevious}/> }
        { next && <Pagination.Next onClick={onNext}/> }
      </PaginatioLink>
    </ContentPagination>

  )
}

export default Index