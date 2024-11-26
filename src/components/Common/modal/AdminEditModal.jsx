import React, { useState } from 'react';
import styled from 'styled-components';
import useAdminEditModalStore from '../../../store/modal/useAdminEditModalStore';
import { lightTheme } from '../../../styles/themes';

function AdminEditModal() {
  const { selectedMovie, updateMovie, closeModal } = useAdminEditModalStore();
  const [title, setTitle] = useState(selectedMovie?.title || '');
  const modaltitle = '영화 정보 수정';
  const imageupload = '포스터 이미지 업로드';
  const movietitle = '영화 제목';
  const moviesave = '저장';
  const handleSave = () => {
    updateMovie({ title });
    closeModal();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{modaltitle}</ModalTitle>
          <CloseButton onClick={closeModal}>✕</CloseButton>
        </ModalHeader>
        <ModalBody>
          <ImageUploadWrapper>
            <ImageUpload>
              <img
                src={selectedMovie?.image || 'https://via.placeholder.com/150'}
                alt="영화 포스터"
              />
            </ImageUpload>
            <p>{imageupload}</p>
          </ImageUploadWrapper>
          <InputWrapper>
            <label htmlFor="title">{movietitle}</label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="영화 제목"
            />
          </InputWrapper>
        </ModalBody>
        <ModalFooter>
          <SaveButton onClick={handleSave}>{moviesave}</SaveButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AdminEditModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 30rem;
  background-color: ${lightTheme.mainColor};
  border-radius: 0.5rem;
  box-shadow: ${lightTheme.defaulBoxShadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  background-color: ${lightTheme.footerBlack};
  color: ${lightTheme.fontWhite};
  font-size: 1.25rem;
  font-weight: ${lightTheme.fontWeightBold};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${lightTheme.fontWhite};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${lightTheme.fontGray};
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${lightTheme.fontGray};
  }
`;

const ImageUpload = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: ${lightTheme.backgroundGray};
  border: 0.1rem dashed ${lightTheme.borderDefault};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

const InputWrapper = styled.div`
  width: 100%;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: ${lightTheme.fontWeightMedium};
    color: ${lightTheme.fontGray};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid ${lightTheme.borderDefault};
  border-radius: 0.25rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${lightTheme.fontBlack};
  }
`;

const ModalFooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${lightTheme.mainColor};
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${lightTheme.footerBlack};
  color: ${lightTheme.fontWhite};
  font-size: 1rem;
  font-weight: ${lightTheme.fontWeightBold};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${lightTheme.fontGray};
  }
`;
