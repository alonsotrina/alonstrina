import styled from "styled-components";
import { globalStyles } from "../../../style/globalStyles";

export const HeaderPageDetail = styled.div`
  /* background-color: ${(props) => props.backgroundColor || globalStyles.colors.danger}; */
  background-color:${({ theme }) => theme.bgColor || "#0d4755"};
  height: 16vh;
  padding: 16px;

  .header__title {
    display: flex;
    align-items: center;
  }

  a {
    color:  ${globalStyles.colors.light};
    margin-right: 12px;
  }
`;
