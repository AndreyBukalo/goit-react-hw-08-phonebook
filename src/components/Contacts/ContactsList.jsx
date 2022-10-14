import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter, selectAllContacts } from 'redux/selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filters = useSelector(getFilter);
  const contacts = useSelector(selectAllContacts);

  const filtredContacts = () => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
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
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </List>
    </>
  );
};
