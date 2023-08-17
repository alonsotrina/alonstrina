/* eslint-disable react/prop-types */
import { ContentDetailHeader, Avatar } from './styled'

const Index = ({ title, subtitle, image}) => {
  return (
    <ContentDetailHeader>
    <Avatar src={image} roundedCircle />
    <div>
      <h4 className='fs-4 fw-bold text-body-secondary m-0'>{title}</h4>
      <p className='text-body-tertiary fst-italic m-0'>{subtitle && `Id: ${subtitle}`}</p>
    </div>
  </ContentDetailHeader>

  )
}

export default Index