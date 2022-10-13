import { ContactList } from 'components/Contacts/ContactsList';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { Filter } from 'components/Filter/Filter';
import { BallTriangle } from 'react-loader-spinner';
import { SpinerWrap } from 'components/PageStyled/ContactsPageStyle';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/selectors';
import { useEffect } from 'react';

export const ContactsPage = () => {
// const { data: contacts} = fetchContact();

  return (
    <section>
      <Filter />
      <ContactList />
      {/* {isFetching ? (
        <SpinerWrap>
          <BallTriangle
            height={250}
            width={250}
            radius={5}
            color="#e65252"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </SpinerWrap>
      ) : (
       
      )} */}
    </section>
  );
};
// contacts = { contacts };