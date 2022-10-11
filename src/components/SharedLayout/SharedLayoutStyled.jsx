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
  margin-left: 15px;
  transition: ease 1s;
  &:hover {
    transition: ease 1s;
    color: white;
  }
`;
