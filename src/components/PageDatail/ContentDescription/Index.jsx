/* eslint-disable react/prop-types */
import { ContentDescription } from './styled'

const Index = ({ children, title }) => {
  return (
    <ContentDescription>
      <h4 className='fs-6 fw-bold mb-3 text-body-secondary'>{title}</h4>

      {children}
    </ContentDescription>

  )
}

export default Index