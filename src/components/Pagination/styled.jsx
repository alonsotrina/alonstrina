import styled from "styled-components";
import { globalStyles } from "../../style/globalStyles";
import Pagination from "react-bootstrap/Pagination";

export const ContentPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 0;
`;

export const PaginatioLink = styled(Pagination)`
  margin: 0;
  border: none;
  .page-link {
    color: ${globalStyles.colors.dark};
    font-size: 20px;
  }
`;
