import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: 25px 0px 50px 40px;
`;
export const Label = styled.label`
  font-size: 25px;
  font-weight: 500;
  margin-right: 42px;
  align-self: center;
  color: #e65252;
  display: block;
`;
export const Input = styled.input`
  padding: 6px;
  font-size: 17px;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 42%;
  top: 20%;
  color: gray;
  width: 18px;
  height: 18px;
`;
