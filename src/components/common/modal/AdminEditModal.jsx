import { useState,useEffect } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import { lightTheme } from '../../../styles/themes';
import { useAdminEditMovie } from '../../../apis/admin/queries';
import { useAdminAddPoster } from "../../../apis/admin/queries";
import { uploadPoster } from '../../../apis/admin/uploadPoster';

ReactModal.setAppElement('#root');

function AdminEditModal() {

  const { isOpen, closeModal, id, title, likes, imageUrl, setTitle, setLikes, setImageUrl } = useAdminModalStore();
  const { mutate: addPoster } = useAdminAddPoster();
  const editMovieMutation = useAdminEditMovie();

  useEffect(() => {
    console.log("imageUrl 업데이트됨:", imageUrl); // 상태 업데이트 확인
  }, [imageUrl]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadPoster(file)
        .then((response) => {
          console.log("서버 응답 데이터:", response); // 서버 응답 데이터 확인
          const uploadedUrl = response?.data?.fileUrl; // 서버에서 반환된 URL
          if (uploadedUrl) {
            console.log("업로드된 URL:", uploadedUrl);
            setImageUrl(uploadedUrl); // 상태값 업데이트
          } else {
            console.error("업로드된 URL이 응답 데이터에 없습니다.");
          }
        })
        .catch((error) => {
          console.error("이미지 업로드 실패:", error.message);
          alert("이미지 업로드에 실패했습니다.");
        });
    } else {
      console.warn("파일이 선택되지 않았습니다.");
    }
  };
  

  const handleRemoveImage = () => {
    setImageUrl('');
  };

  const handleSave = () => {
    const payload = {
      movieId: id,
      title: title.trim(),
      image: imageUrl,
      likeCount: parseInt(likes, 10),
    };
    console.log("전송 데이터:", payload);

    editMovieMutation.mutate(payload, {
      onSuccess: () => {
        alert("영화 정보가 성공적으로 수정되었습니다.");
        closeModal(); // 모달 닫기
      },
      onError: (error) => {
        alert(`영화 정보 수정 실패: ${error.message}`);
      },
    });
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <S.ModalHeader>영화 편집</S.ModalHeader>
      <S.ModalContent>
        <S.AvatarSection>
          <S.StyledAvatar>
            {imageUrl ? (
              <>
                <S.StyledImage src={imageUrl} alt="영화 이미지" />
                <S.RemoveButton onClick={handleRemoveImage}>
                  <CloseIcon fontSize="small" />
                </S.RemoveButton>
              </>
              ) : (
                '이미지 없음'
              )}
          </S.StyledAvatar>
          <input
            type="file"
            accept="image/*"
            id="upload-image"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="upload-image">
            <S.StyledButton component="span">이미지 업로드</S.StyledButton>
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
      <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
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
    gap: 0.63rem; /* 필드 사이의 간격 */
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
