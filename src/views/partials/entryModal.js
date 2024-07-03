import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function EntryModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="User Issue Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Bạn đang gặp vấn đề với thiết bị của mình ?</h2>
      <p>
        Hãy liên hệ với chúng tôi ngay qua số Hotline: <span className="phoneNumber">0903757560</span>
      </p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
export default EntryModal;
