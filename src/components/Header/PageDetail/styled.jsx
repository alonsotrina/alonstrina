import styled from "styled-components";
import { globalStyles } from "../../../style/globalStyles";

export const HeaderPageDetail = styled.div`
  background-color: ${globalStyles.colors.danger};
  /* clip-path: ellipse(70% 90% at 50% 10%); */
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
