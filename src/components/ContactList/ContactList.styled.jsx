import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  width: 400px;
`;

export const Button = styled.button`
  padding: 4px;
  border: 2px solid #bfe7e5f8;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  background-color: #1cc3d6;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    transform: scale(1.05);
    background: rgb(104 91 101);
    box-shadow: 5px 3px 10px 1px;
  }
`;