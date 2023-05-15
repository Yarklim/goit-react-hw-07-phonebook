import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { List, Item, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = () => {
    if (filter === '') return contacts;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
	};
	
	const filteredContacts = handleFilter();

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <BtnDelete
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </BtnDelete>
        </Item>
      ))}
    </List>
  );
};
