import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { globalStyles } from "../../style/globalStyles";

export const SideBar = styled.div`
  font-size: 12px;
  background-color: ${globalStyles.colors.dark};
  width: 15%;
  height: 100vh;
  position: relative;

  .active {
    background-color: #680314c0;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    z-index: 10;
    top: 0;
    transform: translateX(${(props) => (props.open ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
  }
`;

export const Nav = styled.div`
  list-style: none;
  padding: 0;
  width: 100%;

  a {
    color: ${globalStyles.colors.light};
    text-decoration: none;
    font-size: 16px;
    padding: 14px 16px;
    width: 100%;
    display: block;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #680314c0;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 0;
  img {
    width: 70%;
    margin: 0 auto;
  }
`;

export const BtnAction = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
