import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, getContacts } from 'redux/operations';
import { selectorContacts, selectorFilter } from 'redux/selectors';
import { List, Item, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleFilter = () => {
    if (filter === '') return contacts;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.phone.includes(filter)
    );
  };

  const filteredContacts = handleFilter();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <p>{`${contact.name}:  ${contact.phone}`}</p>
          <BtnDelete
            type="button"
            onClick={() => dispatch(deleteContacts(contact.id))}
          >
            Delete
          </BtnDelete>
        </Item>
      ))}
    </List>
  );
};
