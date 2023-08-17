import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { globalStyles } from "../../../style/globalStyles";

export const ContentDetailHeader = styled.div`
  display: flex;
  align-items: flex-end;

  > div {
    margin-left: 12px;
  }

  p {
    font-size: 12px;
    margin: 0;
  }
`;

export const Avatar = styled(Image)`
  width: 160px;
  height: 160px;
  border: solid 8px  ${globalStyles.colors.light};
`;
