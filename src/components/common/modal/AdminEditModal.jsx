import ReactModal from 'react-modal';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { lightTheme } from '../../../styles/themes';
import { useAdminEditMovie } from '../../../apis/admin/queries';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import { handleImageChange, handleRemoveImage, handleSave } from '../../../utils/admin/editModalUtils';

ReactModal.setAppElement('#root');

function AdminEditModal() {
  const { isOpen, closeModal, id, title, likes, imageUrl, setTitle, setLikes, setImageUrl } = useAdminModalStore();
  const editMovieMutation = useAdminEditMovie();
  const modalTexts = {
    modalHeader: "영화 편집",
    uploadButton: "이미지 업로드",
    SaveButton: "저장",
  }

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <S.ModalHeader>{modalTexts.modalHeader}</S.ModalHeader>
      <S.ModalContent>
        <S.AvatarSection>
          <S.StyledAvatar>
            {imageUrl ? (
              <>
                <S.StyledImage src={imageUrl} alt="영화 이미지" />
                <S.RemoveButton onClick={() => handleRemoveImage(setImageUrl)}>
                  <CloseIcon fontSize="small" />
                </S.RemoveButton>
              </>
              ) : (
                '이미지 없음'
              )}
          </S.StyledAvatar>
          <input
            type="file" // url 방식으로 수정 필요
            accept="image/*"
            id="upload-image"
            onChange={(e) => handleImageChange(e, setImageUrl)}
            style={{ display: 'none' }}
          />
          <label htmlFor="upload-image">
            <S.StyledButton component="span">{modalTexts.uploadButton}</S.StyledButton>
          </label>
        </S.AvatarSection>
        <S.FlexBox>
          <S.StyledTextField
            label="영화 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <S.StyledTextField
            label="좋아요"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </S.FlexBox>
      </S.ModalContent>
      <S.SaveButton
        onClick={() =>
          handleSave(
            { movieId: id, 
              title: title.trim(), 
              image: imageUrl, 
              likeCount: parseInt(likes, 10),
            },
            editMovieMutation,
            closeModal
          )
        }
      >
        {modalTexts.SaveButton}
      </S.SaveButton>
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
    height: '31rem',
    margin: 'auto',
    borderRadius: '0.63rem',
    padding: '1.5rem',
    boxShadow: '0rem 0.25rem 1.25rem rgba(0, 0, 0, 0.2)',
  },
};

const S = {
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
