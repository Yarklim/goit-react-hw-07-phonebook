import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { Form, InputStyled, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const item = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (item) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContact({ id, name, number }));
    }
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <InputStyled
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name"
        required
      />
      <h3>Number</h3>
      <InputStyled
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter number"
        required
      />
      <Button type="submit" >
        Add contact
      </Button>
    </Form>
  );
};


