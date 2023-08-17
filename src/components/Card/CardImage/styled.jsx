import styled from "styled-components";
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import { globalStyles } from "../../../style/globalStyles";

export const CardImage = styled(Card)`
  transition: 0.3s;
  cursor: pointer;

  a {
    color:${globalStyles.colors.light}
  }

  &:hover {
    box-shadow: ${globalStyles.boxShadow.RegularShadow};
  }
`;

export const CardImg = styled(Card.Img)`
  height: 250px;
  object-fit:cover;
`;