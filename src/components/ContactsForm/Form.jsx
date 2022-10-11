import { useNavigate } from 'react-router-dom';
import { FormStyle, Label, Input, Btn, Header } from './Form.styled';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';
import toast from 'react-hot-toast';

export const UserForm = () => {
  const navigate = useNavigate();
  const [createContact, { isUninitialized: isAdding }] =
    useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value.toString();
    const avatar = event.target.elements.avatar.value;
    if (
      contacts?.find(cont => cont.name.toLowerCase() === name.toLowerCase())
    ) {
      return toast.error(`${name} is already in contacts`);
    }
    if (!isAdding) {
      return toast.error('Something goes wrong');
    }
    createContact({ name, number, avatar });
    navigate('/', { replace: true });
    form.reset();
    return toast.success(`${name} adding to your contacts...`);
  };

  return (
    <>
      <Header>Please enter contact details</Header>
      <FormStyle onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            placeholder="Please enter your name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor="number">
          Number
          <Input
            placeholder="Please enter phone number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Label htmlFor="avatar">
          Avatar
          <Input
            placeholder="Please enter avatar URL (Not required)"
            type="url"
            name="avatar"
            pattern="https://.*"
            size="30"
          />
        </Label>

        <Btn type="Submit">Add to Contacts</Btn>
      </FormStyle>
    </>
  );
};
