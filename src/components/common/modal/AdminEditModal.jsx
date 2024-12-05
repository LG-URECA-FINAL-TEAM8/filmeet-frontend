import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import { lightTheme } from '../../../styles/themes';

ReactModal.setAppElement('#root');

function AdminEditModal() {
  const { isOpen, closeModal, modalData } = useAdminModalStore();

  const [title, setTitle] = useState(modalData?.title || '범죄도시');
  const [likes, setLikes] = useState(modalData?.likes || '65개');
  const [rating, setRating] = useState(modalData?.rating || '4.5');
  const [image, setImage] = useState(modalData?.image || '');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setImage('');
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <s.ModalHeader>영화 이미지 변경</s.ModalHeader>
      <s.ModalContent>
        <s.AvatarSection>
          <s.StyledAvatar>
            {image ? (
              <>
                <s.StyledImage src={image} alt="영화 이미지" />
                <s.RemoveButton onClick={handleRemoveImage}>
                  <CloseIcon fontSize="small" />
                </s.RemoveButton>
              </>
            ) : (
              '이미지 없음'
            )}
          </s.StyledAvatar>
          <input
            type="file"
            accept="image/*"
            id="upload-image"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="upload-image">
            <s.StyledButton component="span">이미지 업로드</s.StyledButton>
          </label>
        </s.AvatarSection>
        <s.StyledTextField
          label="영화 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <s.FlexBox>
          <s.StyledTextField
            label="좋아요"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <s.StyledTextField
            label="랭킹점수"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </s.FlexBox>
      </s.ModalContent>
      <s.SaveButton onClick={closeModal}>저장</s.SaveButton>
    </ReactModal>
  );
}

export default AdminEditModal;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    width: '25rem', 
    height: '37.5rem', 
    margin: 'auto',
    borderRadius: '0.63rem', 
    padding: '1.5rem', 
    boxShadow: '0rem 0.25rem 1.25rem rgba(0, 0, 0, 0.2)', 
  },
};

const s = {
  ModalHeader: styled.h2`
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1.25rem;
    color: ${lightTheme.color.fontblack};
    font-family: ${lightTheme.font.fontSuitBold};
  `,

  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  `,

  AvatarSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.25rem;
  `,

  StyledAvatar: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.5rem; 
    height: 12.5rem; 
    font-size: 1rem;
    color: ${lightTheme.color.fontWhite};
    background-color: ${lightTheme.color.fontblack};
    border: 0.13rem solid ${lightTheme.color.collectionColor};
    border-radius: 0.5rem; 
    overflow: hidden;

  `,

  StyledImage: styled.img`
    width: 100%;
    height: 100%;
  `,

  RemoveButton: styled.div`
    position: absolute;
    top: 0.31rem; 
    right: 0.31rem; 
    background-color: transparent;
    color: ${lightTheme.color.fontWhite};
    cursor: pointer;

    &:hover {
      color: ${lightTheme.color.fontBlack};
    }
  `,

  StyledButton: styled(Button)`
    margin-top: 0.8rem; 
    padding: 0.5rem 1.25rem; 
    font-size: 0.9rem;
    background-color: ${lightTheme.color.fontPink};
    color: ${lightTheme.color.fontWhite};
    border-radius: 0.6rem; 
    font-family: ${lightTheme.font.fontSuitBold};
    cursor: pointer;

    &:hover {
      background-color: ${lightTheme.color.generePinkColor};
    }
  `,

  StyledTextField: styled(TextField)`
    & .MuiOutlinedInput-root {
      border-radius: 0.75rem; 
      border-color: ${lightTheme.color.fontPink};
      font-family: ${lightTheme.font.fontSuitRegular};

      &:hover {
        border-color: ${lightTheme.color.fontPink};
      }

      &.Mui-focused {
        border-color: ${lightTheme.color.generePinkColor};
      }
    }

    & .MuiInputLabel-root {
      font-size: 0.9rem;
      color: black;
      font-family: ${lightTheme.font.fontSuitBold};

      &.Mui-focused {
        color: ${lightTheme.color.generePinkColor};
      }
    }
  `,

  FlexBox: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.63rem; 
  `,

  SaveButton: styled(Button)`
    margin-top: 1.25rem; 
    padding: 0.63rem 0; 
    width: 100%;
    font-size: 1rem;
    background-color: ${lightTheme.color.fontPink};
    color: ${lightTheme.color.fontWhite};
    border-radius: 0.75rem; 
    font-family: ${lightTheme.font.fontSuitBold};

    &:hover {
      background-color: ${lightTheme.color.generePinkColor};
    }
  `,
};