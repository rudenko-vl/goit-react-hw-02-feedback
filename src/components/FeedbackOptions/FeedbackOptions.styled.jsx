import styled from "styled-components";

export const BtnList = styled.ul`
  display: flex;
  list-style: none;
`;
export const BtnItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
