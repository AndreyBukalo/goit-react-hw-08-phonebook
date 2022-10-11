import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, SideBar, LinkNav, LogoIcon } from './SharedLayoutStyled';

export const SharedLayout = () => {
  return (
    <Container>
      <SideBar>
        <LogoIcon />
        <nav>
          <LinkNav to="/">Contacts</LinkNav>
          <LinkNav to="/AddContactForm">Add Contact</LinkNav>
        </nav>
      </SideBar>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
