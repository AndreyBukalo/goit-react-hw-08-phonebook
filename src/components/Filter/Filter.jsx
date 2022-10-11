import { Label, Input, Container, SearchIcon } from './Filter.styled';

import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => {
    const filtred = event.target.value;
    dispatch(setFilter(filtred));
  };
  return (
    <Container>
      <Label>Contacts</Label>
      <Input
        type="text"
        name="filter"
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <SearchIcon />
    </Container>
  );
};
