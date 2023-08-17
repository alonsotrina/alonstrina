import styled from "styled-components";
import backgroundImage from "../../assets/bg-404.jpeg";
import { globalStyles } from "../../style/globalStyles";

export const Page = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageContent = styled.div`
  text-align: center;
  img {
    width: 80%;
  }

  h1 {
    font-size: 160px;
  }

  a {
    color: ${globalStyles.colors.light};
  }
`;
