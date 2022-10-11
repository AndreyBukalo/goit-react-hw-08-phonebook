import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ContactsPage } from 'Pages/Contacts';
import { AddContactPage } from 'Pages/AddContactForm';

export const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ContactsPage />} />
          <Route path="/AddContactForm" element={<AddContactPage />} />
        </Route>
      </Routes>
    </>
  );
};
