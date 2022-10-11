import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);

  const filtredContacts = () => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = filtredContacts();

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        {' '}
        <Outlet />
      </Suspense>
      <List>
        {visibleContacts?.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
      </List>
    </>
  );
};
