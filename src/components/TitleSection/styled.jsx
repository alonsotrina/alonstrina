import styled from "styled-components";
import { InputGroup } from "react-bootstrap";
import { globalStyles } from "../../style/globalStyles";

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  .input-group {
    width: 20%;
  }

  @media (max-width: 768px) {
    .input-group {
      width: 50%;
    }
  }
`;

export const Span = styled(InputGroup.Text)`
  background-color: ${globalStyles.colors.light};
`;
