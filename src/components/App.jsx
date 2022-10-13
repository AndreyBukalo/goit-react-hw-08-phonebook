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
          <Route path="/Contacts" element={<ContactsPage />} />
          <Route path="/AddContactForm" element={<AddContactPage />} />
          <Route path="/Registration" element={<RegistrationPage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );};
  //  {
  //    /* <Route index element={<ContactsPage />} /> */
  //  }