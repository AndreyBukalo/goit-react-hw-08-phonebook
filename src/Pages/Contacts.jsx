import { ContactList } from 'components/Contacts/ContactsList';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { Filter } from 'components/Filter/Filter';
import { BallTriangle } from 'react-loader-spinner';
import { SpinerWrap } from 'components/PageStyled/ContactsPageStyle';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <section>
      <Filter />
      {isFetching ? (
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
        <ContactList contacts={contacts} />
      )}
    </section>
  );
};
