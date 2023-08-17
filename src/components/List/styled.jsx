import styled from "styled-components";

export const List = styled.div`
  list-style: none;
 padding: 0;
 border-radius: 8px;

 li {

  font-size: 14px;
  padding: 8px 12px;
  display: flex;
 }

 li span {
  font-weight: 600;
  display: block;
  width: 96px;
  text-transform: capitalize;
 }

 li:nth-child(2n) {
  background-color: #fafafa;
 }
`;
