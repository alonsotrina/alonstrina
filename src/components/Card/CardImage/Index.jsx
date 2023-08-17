/* eslint-disable react/prop-types */
import { CardImage, CardImg } from "./styled";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Index = ({ title, image, bg, textColor, link }) => {
  return (
    <CardImage
      bg={bg}
      text={textColor}
      className="mb-2"
    >
      <Link to={link}>
        <CardImg variant="top" src={image} />
      </Link>

      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>
          <Link to={link} className="fst-italic">Ver más</Link>
        </Card.Text>
      </Card.Body>
    </CardImage>
  )
}


Index.defaultProps = {
  image: "https://avatars.mds.yandex.net/i?id=ca6ddedbbf4cc5e454c7ed68175c190c-4338206-images-thumbs&n=13",
  title: 'Title',
  bg: 'dark',
  textColor: 'white',
  link: '/dashboard'
}

export default Index