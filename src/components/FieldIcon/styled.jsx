import styled from "styled-components";
import {Form, InputGroup} from "react-bootstrap";
import { globalStyles } from "../../style/globalStyles";

export const Label = styled(Form.Label)`
  font-size: 12px;
  margin-bottom: 6px;
`;
export const MsgError = styled.div`
  font-size: 12px;
  color: ${globalStyles.colors.danger};
`;

export const InputIcon = styled(InputGroup)`
  border: 2px solid ${globalStyles.colors.dark};
  border-radius: 0.375rem;

  .input-group-text {
    background-color: ${globalStyles.colors.light} !important;
    border: none;
  }
`;
