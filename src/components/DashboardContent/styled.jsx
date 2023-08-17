import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { globalStyles } from "../../style/globalStyles";

export const Content = styled.div`
  background-color: ${globalStyles.colors.grey};
  width: 85%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavBar = styled.div`
  background-color: ${globalStyles.colors.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 48px;

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

export const MenuToggleButton = styled(Button)`
  display: none;
  margin-right: 12px;

  @media (max-width: 768px) {
    display: block;
  }
`;
