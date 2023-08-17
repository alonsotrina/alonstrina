import styled from "styled-components";
import Image from 'react-bootstrap/Image';
import { globalStyles } from "../../../style/globalStyles";

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: ${globalStyles.colors.light};
  border-radius: 12px;
  border: solid 1px #ededed;
  position: relative;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: ${globalStyles.boxShadow.RegularShadow};
  }
`;

export const CardContent = styled.div`
  width: 80%;
  display: flex;
  .title {
    margin-left: 12px;
  }
  .title > p {
    font-size: 12px;
    margin: 0;
  }

  .icon {
    margin-left: auto;
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
`;

export const CardTitle = styled.div`
  margin-left: 12px;

  h5 {
    font-size: 14px;
  }
   p {
    font-size: 12px;
    margin: 0;
  }
`;

export const Avatar = styled(Image)`
  width: 56px;
  height: 56px;
`;