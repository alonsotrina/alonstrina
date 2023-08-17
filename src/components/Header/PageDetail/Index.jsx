/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { HeaderPageDetail } from './styled'
import { BiArrowBack } from "react-icons/bi";


const Index = ({ title, link }) => {
  return (
    <HeaderPageDetail>
      <div className="header__title">
        { link &&  <Link to={link}><BiArrowBack/></Link>}
        { title &&  <h2 className='fs-5 fw-bold text-light mt-3'>{title}</h2>}
      </div>
    </HeaderPageDetail>
  )
}

Index.defaultProps = {
  link: "/dashboard",
  title: 'Title page',
}

export default Index