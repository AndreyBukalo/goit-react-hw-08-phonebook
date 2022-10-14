import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'Pages/Home';
import { ContactsPage } from 'Pages/Contacts';
import { AddContactPage } from 'Pages/AddContactForm';
import { RegistrationPage } from 'Pages/Registration';
import { LoginPage } from 'Pages/Login';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing..</b>
  ) : (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/Contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/Login" />
            }
          />
          <Route path="/AddContactForm" element={<AddContactPage />} />
          <Route
            path="/Registration"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/Contacts"
              />
            }
          />
          <Route
            path="/Login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/Contacts"
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
