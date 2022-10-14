import { ContactList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { BallTriangle } from 'react-loader-spinner';
import { SpinerWrap } from 'components/PageStyled/ContactsPageStyle';
import { useAuth } from 'components/hooks';

export const ContactsPage = () => {
  const { isLoading } = useAuth();
  return (
    <section>
      <Filter />
      {isLoading ? (
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
        <ContactList />
      )}
    </section>
  );
};
