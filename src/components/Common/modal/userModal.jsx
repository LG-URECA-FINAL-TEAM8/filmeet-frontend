import React from 'react';
import ReactModal from 'react-modal';
import useModalStore from '../../../store/modal/useModalStore'; 
import { lightTheme } from '../../../styles/themes';

ReactModal.setAppElement('#root');

function UserModal() {
  const { isModalOpen, closeModal } = useModalStore(); 

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      width: '20rem',
      height: 'auto',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: `${lightTheme.defaulBoxShadow}`,
      overflow: 'auto'
    }
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="User Modal"
    >
      <div>
        <h2>모달 제목</h2>
        <p>모달 내용을 여기에 작성하세요.</p>
        <button onClick={closeModal}>닫기</button>
      </div>
    </ReactModal>
  );
}

export default UserModal;