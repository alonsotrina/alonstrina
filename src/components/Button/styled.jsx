import styled from "styled-components";
import Button from 'react-bootstrap/Button';

import { globalStyles } from '../../style/globalStyles';

export const Buttons = styled(Button)`
   font-size:12px;
   color:  ${globalStyles.colors.danger};
`;

