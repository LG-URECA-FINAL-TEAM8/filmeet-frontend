import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import { lightTheme } from '../../../styles/themes';

function AdminAddModal() {
  const {
    addModal,
    closeAddModal,
    setAddModalTitle,
    setAddModalImage,
    setAddModalGenre,
    setAddModalReleaseDate,
  } = useAdminModalStore();

  const modal = {
    modalSubTitle: '영화 정보 입력',
    uploadTitle: '이미지 업로드',
    uploadSubTitle: '여기로 드래그 앤 드롭',
    uploadButton: '업로드',
    saveButton: '저장',
  };

  const { isOpen, title, image, genre, releaseDate } = addModal;
  const genres = ['액션', '호러', '코미디', '드라마', 
                  '스릴러', '로맨스', '범죄', '판타지',
                  '미스터리','애니메이션', 'SF', '모험',
                  '다큐', '뮤지컬', '가족', '느와르'
                ];
  
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
    <ModalOverlay onClick={handleOverlayClick}>
      <StyledCard onClick={(e) => e.stopPropagation()}>
        <StyledSubtitle>{modal.modalSubTitle}</StyledSubtitle>
        <StyledCardContent>
          <StyledImagePreview>
            <img
              src={image || 'https://via.placeholder.com/150'}
              alt="Preview"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </StyledImagePreview>
          <StyledUploadTitle>{modal.uploadTitle}</StyledUploadTitle>
          <StyledUploadSubtitle>{modal.uploadSubTitle}</StyledUploadSubtitle>
          <input
            accept="image/*"
            type="file"
            id="image-upload"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <UploadButton variant="contained" component="span">
              {modal.uploadButton}
            </UploadButton>
          </label>
        </StyledCardContent>
        <StyledTextField
          label="영화 제목"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setAddModalTitle(e.target.value)}
        />
        <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <StyledTextField
            select
            label="장르 선택"
            variant="outlined"
            fullWidth
            value={genre}
            onChange={(e) => setAddModalGenre(e.target.value)}
          >
            {genres.map((g) => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </StyledTextField>
          <StyledTextField
            type="date"
            label="개봉일 선택"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={releaseDate}
            onChange={(e) => setAddModalReleaseDate(e.target.value)}
          />
        </Box>
        <SaveButton variant="contained" fullWidth onClick={handleSave}>
          {modal.saveButton}
        </SaveButton>
      </StyledCard>
    </ModalOverlay>
  );
}

export default AdminAddModal;

const ModalOverlay = styled(Box)({
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
});

const StyledCard = styled(Card)({
  width: '22rem',
  padding: '2rem',
  borderRadius: '0.5rem',
  boxShadow: lightTheme.box.defaulBoxShadow,
});

const StyledSubtitle = styled(Typography)({
  color: lightTheme.color.fontGray,
  marginBottom: '1rem',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: lightTheme.box.defaultBorder,
  borderRadius: '0.5rem',
  padding: '2rem',
  marginBottom: '2rem',
});

const StyledImagePreview = styled(Box)({
  width: '4rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: lightTheme.color.mainColor,
  borderRadius: '2rem',
  marginBottom: '1rem',
});

const StyledUploadTitle = styled(Typography)({
  fontWeight: lightTheme.font.fontWeightBold,
  marginBottom: '1rem',
});

const StyledUploadSubtitle = styled(Typography)({
  color: lightTheme.color.fontGray,
});

const UploadButton = styled(Button)({
  marginTop: '1rem',
  backgroundColor: lightTheme.color.backgroundBlue,
  color: lightTheme.color.fontWhite,
  '&:hover': {
    backgroundColor: lightTheme.color.backgroundButtonBlue,
  },
});

const StyledTextField = styled(TextField)({
  marginBottom: '2rem',
});

const SaveButton = styled(Button)({
  backgroundColor: lightTheme.color.backgroundBlue,
  color: lightTheme.color.fontWhite,
  '&:hover': {
    backgroundColor: lightTheme.color.backgroundButtonBlue,
  },
});
