/* eslint-disable react/prop-types */
import { Card, Avatar, CardContent, CardTitle } from "./styled";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const Index = ({ title, subtitle, img, onClick }) => {

  return (
    <Card className="mb-2 p-3" onClick={onClick}>
      <Avatar src={img} roundedCircle fluid />
      <CardContent>
        <CardTitle>
          <h5 className="text-body-secondary fw-bold mb-0">{title}</h5>
          <p className="text-body-tertiary fst-italic">{subtitle}</p>
        </CardTitle>

        <BsBoxArrowInUpRight className="icon" />
      </CardContent>
    </Card>
  )
}

Index.defaultProps = {
  img: "https://avatars.mds.yandex.net/i?id=ca6ddedbbf4cc5e454c7ed68175c190c-4338206-images-thumbs&n=13",
  title: 'Title',
  subtitle:'Subtitle'
}

export default Index