import { Puff } from 'react-loader-spinner';
import {
  ListItem,
  UserBox,
  Btn,
  DeleteIcon,
  ItemName,
  ItemNumber,
} from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const { isLoading } = useAuth();

  return (
    <ListItem key={id}>
      <UserBox>
        <ItemName>{name}</ItemName>
      </UserBox>
      <ItemNumber>{number}</ItemNumber>
      <Btn type="button" onClick={handleDelete}>
        {isLoading ? (<Puff height="17" width="18" radisu={1} color="#e65252" visible={true} />) : <DeleteIcon /> }
      </Btn>
    </ListItem>
  );
};
;
  
  