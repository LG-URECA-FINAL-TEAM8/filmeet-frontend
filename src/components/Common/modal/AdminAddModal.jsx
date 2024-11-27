import { useState } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';

function AdminAddModal() {
  const { addModal, closeAddModal } = useAdminModalStore();
  const { isOpen } = addModal;
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const modalTitle = '새로운 영화 추가';
  const uploadButton = '이미지 업로드';
  const movieTitle = '영화 제목';
  const saveButton = '추가';

  const handleSave = () => {
    alert(`새로운 영화 추가: ${title}`);
    closeAddModal();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalHeader>
          <S.ModalTitle>{modalTitle}</S.ModalTitle>
          <S.CloseButton onClick={closeAddModal}>✕</S.CloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <S.ImageUploadWrapper>
            <S.ImageUpload>
              <img
                src={'https://via.placeholder.com/150'}
                alt="영화 포스터"
              />
            </S.ImageUpload>
            <label>
              <S.HiddenFileInput type="file" accept="image/*" onChange={handleImageUpload} />
              <S.UploadButton>{uploadButton}</S.UploadButton>
            </label>
          </S.ImageUploadWrapper>
          <S.InputWrapper>
            <label htmlFor="title">{movieTitle}</label>
            <S.Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="영화 제목 입력"
            />
          </S.InputWrapper>
        </S.ModalBody>
        <S.ModalFooter>
          <S.SaveButton onClick={handleSave}>{saveButton}</S.SaveButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}

const S = {
  ModalOverlay: styled.div`
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
  `,

  ModalContent: styled.div`
    width: 30rem;
    background-color: ${lightTheme.mainColor};
    border-radius: 0.5rem;
    box-shadow: ${lightTheme.defaulBoxShadow};
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,

  ModalHeader: styled.div`
    background-color: ${lightTheme.footerBlack};
    color: ${lightTheme.fontWhite};
    font-size: 1.25rem;
    font-weight: ${lightTheme.fontWeightBold};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  ModalTitle: styled.h3`
    margin: 0;
    font-size: 1.25rem;
  `,

  CloseButton: styled.button`
    background: none;
    border: none;
    color: ${lightTheme.fontWhite};
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: ${lightTheme.fontGray};
    }
  `,

  ModalBody: styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  `,

  ImageUploadWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    p {
      margin: 0;
      font-size: 0.9rem;
      color: ${lightTheme.fontGray};
    }
  `,

  ImageUpload: styled.div`
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
  `,

  HiddenFileInput: styled.input`
    display: none;
  `,

  UploadButton: styled.span`
    cursor: pointer;
    padding: 0.5rem;
    background-color: ${lightTheme.footerBlack};
    color: ${lightTheme.fontWhite};
    font-size: 0.9rem;
    border-radius: 0.25rem;
    &:hover {
      background-color: ${lightTheme.fontGray};
    }
  `,

  InputWrapper: styled.div`
    width: 100%;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: ${lightTheme.fontWeightMedium};
      color: ${lightTheme.fontGray};
    }
  `,

  Input: styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 0.1rem solid ${lightTheme.borderDefault};
    border-radius: 0.25rem;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${lightTheme.fontBlack};
    }
  `,

  ModalFooter: styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    background-color: ${lightTheme.mainColor};
  `,

  SaveButton: styled.button`
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
  `,
};

export default AdminAddModal;
