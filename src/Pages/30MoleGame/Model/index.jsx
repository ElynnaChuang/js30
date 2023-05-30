import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModelContent';

export const TimeNotification = ({ open, score }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(open);
  }, [open]);

  return (
    <>
      <p style={{ display: 'none' }}>Result</p>
      {showModal && createPortal(<ModalContent score={score} />, document.body)}
    </>
  );
};
