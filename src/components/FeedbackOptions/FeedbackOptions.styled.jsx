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
export const Btn = styled.button`
  padding: 5px;
  text-transform: uppercase;
  color: black;
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: blue;
    color: white;
  }
`;
