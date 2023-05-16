import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { EmergencyContent } from 'components/EmergencyContent';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <EmergencyContent onClose={onClose} />
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};
