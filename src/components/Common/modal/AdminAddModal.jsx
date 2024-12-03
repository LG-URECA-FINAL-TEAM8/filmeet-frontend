import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import genres from '../../../data/admingenres';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import { lightTheme } from '../../../styles/themes';
import SvgImagePreview from '../../../assets/svg/ImagePreview';

function AdminAddModal() {
  const {
    addModal,
    closeAddModal,
    setAddModalTitle,
    setAddModalImage,
    setAddModalGenre,
    setAddModalReleaseDate,
  } = useAdminModalStore();

  const modalContent = {
    modalSubTitle: '영화 정보 입력',
    uploadTitle: '이미지 업로드',
    uploadSubTitle: '여기로 드래그 앤 드롭',
    uploadButton: '업로드',
    saveButton: '저장',
  };

  const { isOpen, title, genre, releaseDate } = addModal;
  
  const handleSave = () => {
    alert(`새로운 영화 추가: ${title}`);
    closeAddModal();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAddModalImage(imageUrl);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeAddModal();
    }
  };
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        <S.Subtitle>{modalContent.modalSubTitle}</S.Subtitle>
        <S.CardContent>
        <S.ImagePreview>
          {addModal.image ? (
            <S.Image src={addModal.image} alt="Preview"/>
          ) : (
            <SvgImagePreview />
            )}
          </S.ImagePreview>
          <S.UploadTitle>{modalContent.uploadTitle}</S.UploadTitle>
          <S.UploadSubtitle>{modalContent.uploadSubTitle}</S.UploadSubtitle>
          <S.HiddenInput
            accept="image/*"
            type="file"
            id="image-upload"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <S.UploadButton variant="contained" component="span">
              {modalContent.uploadButton}
            </S.UploadButton>
          </label>
        </S.CardContent>
        <S.TextField
          label="영화 제목"
          value={title}
          onChange={(e) => setAddModalTitle(e.target.value)}
        />
        <S.Box>
          <S.TextField
            select
            label="장르 선택"
            value={genre}
            onChange={(e) => setAddModalGenre(e.target.value)}
          >
            {genres.map((g) => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </S.TextField>
          <S.TextField
            type="date"
            label="개봉일 선택"
            InputLabelProps={{ shrink: true }}
            value={releaseDate}
            onChange={(e) => setAddModalReleaseDate(e.target.value)}
          />
        </S.Box>
        <S.SaveButton variant="contained" fullWidth onClick={handleSave}>
          {modalContent.saveButton}
        </S.SaveButton>
      </S.Card>
    </S.ModalOverlay>
  );
}

export default AdminAddModal;

const S = {
  ModalOverlay: styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: lightTheme.color.backgroundBlack,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1300,
  }),

  Card: styled(Card)({
    width: '22rem',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: lightTheme.box.defaulBoxShadow,
  }),

  Subtitle: styled(Typography)({
    color: lightTheme.color.fontGray,
    marginBottom: '1rem',
  }),

  CardContent: styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: lightTheme.box.defaultBorder,
    borderRadius: '0.5rem',
    padding: '2rem',
    marginBottom: '2rem',
  }),

  Box: styled(Box)({
    display: 'flex',
    gap: '1rem', 
    marginBottom: '1rem'
  }),

  ImagePreview: styled(Box)({
    width: '4rem',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.color.mainColor,
    borderRadius: '2rem',
    marginBottom: '1rem',
  }),

  Image: styled('img')({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  }),

  HiddenInput: styled('input')({
    display: 'none',
  }),

  UploadTitle: styled(Typography)({
    fontWeight: lightTheme.font.fontWeightBold,
    marginBottom: '1rem',
  }),

  UploadSubtitle: styled(Typography)({
    color: lightTheme.color.fontGray,
  }),

  UploadButton: styled(Button)({
    marginTop: '1rem',
    backgroundColor: lightTheme.color.buttonPink,
    color: lightTheme.color.fontWhite,
  }),

  TextField: styled(TextField)({
    marginBottom: '2rem',
    width: '100%',
    variant: 'outlined',
    fullWidth: true,     
  }),

  SaveButton: styled(Button)({
    backgroundColor: lightTheme.color.buttonPink,
    color: lightTheme.color.fontWhite,
  }),
};