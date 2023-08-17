import styled from "styled-components";
import backgroundImage from "../../assets/bg-login.jpeg";
import { globalStyles } from "../../style/globalStyles";

export const PageLogin = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColRight = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 60%;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    order: 1;
  }
`;

export const ColLeft = styled.div`
  background-color: ${globalStyles.colors.light};
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 60%;
  }
  .link {
    width: 100%;
    display: block;
    text-align: center;
    color: ${globalStyles.colors.dark};
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
    order: 2;
    align-items: flex-start;
    form {
      width: 80%;
      margin-top: 48px;
    }
  }
`;
