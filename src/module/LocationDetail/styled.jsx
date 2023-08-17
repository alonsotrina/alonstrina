import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { globalStyles } from "../../style/globalStyles";

export const ContentDetail = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: -80px;
  position: relative;
  z-index: 2;
`;

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
  border: solid 8px #ffffff;
`;

export const ContentDescription = styled.div`
  background-color: ${globalStyles.colors.light};
  padding: 16px;
  border-radius: 8px;
`;
