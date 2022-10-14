import { useNavigate } from 'react-router-dom';
import { FormStyle, Label, Input, Btn, Header } from './Form.styled';
import { addContact } from 'redux/operations';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/selectors';

export const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contacts = useSelector(selectAllContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const contactItem = {
      name,
      number,
    };

    if (
      contacts?.find(cont => cont.name.toLowerCase() === name.toLowerCase())
    ) {
      return toast.error(`${name} is already in contacts`);
    }

    dispatch(addContact(contactItem));
    navigate('/Contacts', { replace: true });
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

        <Btn type="Submit">Add to Contacts</Btn>
      </FormStyle>
    </>
  );
};
