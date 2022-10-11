import styled from '@emotion/styled';

export const Header = styled.h1`
  font-size: 25px;
  font-weight: 500;
  color: #e65252;
  margin: 25px 0px 50px 40px;
`;
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 280px;
  width: 480px;
  margin-left: 40px;

  border-radius: 10px;
  background: rgba(248, 243, 243, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(20, 17, 17, 0.25);
  padding: 30px;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: gray;
`;
export const Input = styled.input`
  width: 100%;
  padding: 6px;
  font-size: 17px;
  border: none;
  outline: none;
  border-bottom: 2px solid;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
`;
export const Btn = styled.button`
  margin-top: 40px;
  width: 280px;
  background: linear-gradient(to right, #196bca, #6433e0);
  background-color: #196bca;
  color: #fff;
  font-family: Trebuchet MS;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 14px 15px;
  border: 0px solid #000;
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: linear-gradient(to right, #5482d0, #7d5ee3);
    background-color: #5482d0;
  }
`;
