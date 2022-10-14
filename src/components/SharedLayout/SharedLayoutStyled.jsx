import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import asideBgc from '../../Images/asideBgc.jpg';
import { BsBook } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const SideBar = styled.aside`
  min-width: 180px;

  display: flex;
  flex-direction: column;

  background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(47, 48, 58, 0.9)),
      to(rgba(47, 48, 58, 0.9))
    ),
    url(${asideBgc});
`;

export const LogoIcon = styled(BsBook)`
  color: gray;
  width: 54px;
  height: 54px;
  margin: 25px 0px 0px 60px;
`;
export const LinkNav = styled(NavLink)`
  color: #e65252;
  text-decoration: none;
  font-size: 24px;
  display: block;
  margin-top: 50px;
  margin-left: 25px;
  transition: ease 1s;
  &:hover {
    transition: ease 1s;
    color: white;
  }
`;


export const UserName = styled.p`
  color:gray;
  text-decoration: none;
  font-size: 18px;
  display: block;
  margin-top: 50px;
  margin-right:10px;
  margin-left:10px;
`;


export const Btn = styled.button`
  margin-top: 40px;
  margin-left: 35px;
  width: 80px;
  background: linear-gradient(to right, #196bca, #6433e0);
  background-color: #196bca;
  color: #fff;
  font-family: Trebuchet MS;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 8px 8px;
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
