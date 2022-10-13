
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { logOut } from 'redux/auth';
import { Container, SideBar, LinkNav, LogoIcon } from './SharedLayoutStyled';


export const SharedLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuth();
  const loggedOut = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
}
  return (
    <Container>
      <SideBar>
        <LogoIcon />
        <nav>
          {isLoggedIn && (
            <>
              <p>Welcom {user.name}</p>
              <LinkNav to="/Contacts">Contacts</LinkNav>
              <LinkNav to="/AddContactForm">Add Contact</LinkNav>
              <button type="button" onClick={loggedOut}>
                Log out
              </button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <LinkNav to="/Registration">Sign up</LinkNav>
              <LinkNav to="/Login">Sign in</LinkNav>
            </>
          )}
        </nav>
      </SideBar>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
