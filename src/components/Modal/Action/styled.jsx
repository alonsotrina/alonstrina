import styled from "styled-components";
import { globalStyles } from '../../../style/globalStyles';
import { Modal } from 'react-bootstrap';

export const Dialogs = styled(Modal)`
   .modal-header {
    border-bottom: none;
   }

   .modal-footer {
      border-top: none;
      justify-content:center;
   }

`;


export const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
   font-size:100px;

   .success {
      color: ${globalStyles.colors.success};
   }
   .danger {
      color: ${globalStyles.colors.danger};
   }
   .warning {
      color: ${globalStyles.colors.warning};
   }
`;

