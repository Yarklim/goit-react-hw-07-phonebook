import { useState } from 'react';
import Loader from './Loader/Loader';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { EmergencyBtn } from './EmergencyBtn';
import { Modal } from './Modal';
import { Container } from './App.styled';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <Container>
      <Loader>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <EmergencyBtn title="EMERGENCY NUMBERS!!!" onClick={toggleModal} />
        {showModal && <Modal onClose={toggleModal} />}
      </Loader>
    </Container>
  );
};
