import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { globalStyles } from "../../style/globalStyles";

export const Label = styled(Form.Label)`
  font-size: 12px;
  margin-bottom: 6px;
`;

export const Input = styled(Form.Control)`
  border: 2px solid ${globalStyles.colors.dark};
`;

export const MsgError = styled.div`
  font-size: 12px;
  color: ${globalStyles.colors.danger};
`;
