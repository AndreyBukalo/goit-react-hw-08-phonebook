

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
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';
import { ContactsReducer } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));


  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // if (avatar === '') {
  //   avatar =
  //     'https://phonebook.sydney.edu.au/static/media/thumbnail-person.ac59bd47.svg';
  // }
  return (
    <ListItem key={id}>
      <UserBox>
        <ItemName>{name}</ItemName>
      </UserBox>
      <ItemNumber>{number}</ItemNumber>
      <Btn type="button" onClick={ handleDelete}>
        (
        <Puff
            height="17"
            width="18"
            radisu={1}
            color="#e65252"
            visible={true}
          />
        ) : (
        <DeleteIcon />)
      </Btn>
    </ListItem>
  );
};
