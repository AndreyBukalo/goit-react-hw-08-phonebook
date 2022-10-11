import styled from '@emotion/styled';
import { AiOutlineDelete } from 'react-icons/ai';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  width: 480px;
  padding: 6px;
  margin-bottom: 12px;
  border-bottom: 1px solid gray;
`;
export const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  margin: 0;
`;

export const ItemName = styled.span`
  margin-left: 15px;
  font-weight: 500;
`;
export const ItemNumber = styled.span`
  margin-right: 5px;
  color: gray;
  display: flex;
  justify-content: flex-end;
  width: 180px;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 45px;
  height: 22px;
  scale: 1;
  transition: ease-in 0.5s;
  &:hover {
    color: #e65252;
    scale: 1.1;
    transition: ease-in 0.5s;
  }
`;
export const Btn = styled.button`
  height: 25px;
  border: none;
  background-color: transparent;
`;

export const Avatar = styled.img`
  width: 60px;
  border: 3px solid gray;
  border-radius: 50%;
`;
