import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { EmergencyBtn } from './EmergencyBtn';
import { Modal } from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import { togleModal } from 'redux/contactSlice';
import { Container } from './App.styled';

export const App = () => {
	const showModal = useSelector(state => state.modal);
	const dispatch = useDispatch();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <EmergencyBtn title="EMERGENCY NUMBERS!!!" onClick={() => dispatch(togleModal(showModal))} />
      {showModal && <Modal />}
    </Container>
  );
};
