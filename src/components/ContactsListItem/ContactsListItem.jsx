import { useDeleteContactMutation } from 'redux/contactsSlice';

import { Puff } from 'react-loader-spinner';
import {
  ListItem,
  UserBox,
  Btn,
  Avatar,
  DeleteIcon,
  ItemName,
  ItemNumber,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone, avatar }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  if (avatar === '') {
    avatar =
      'https://phonebook.sydney.edu.au/static/media/thumbnail-person.ac59bd47.svg';
  }
  return (
    <ListItem key={id}>
      <UserBox>
        <Avatar src={avatar} alt="Contact avatar" />
        <ItemName>{name}</ItemName>
      </UserBox>
      <ItemNumber>{phone.slice(0, 15)}</ItemNumber>
      <Btn type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? (
          <Puff
            height="17"
            width="18"
            radisu={1}
            color="#e65252"
            visible={true}
          />
        ) : (
          <DeleteIcon />
        )}
      </Btn>
    </ListItem>
  );
};
