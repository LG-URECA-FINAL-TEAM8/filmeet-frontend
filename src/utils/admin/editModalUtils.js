import { uploadPoster } from '../../apis/admin/uploadPoster';

export const handleImageChange = (e, setImageUrl) => {
  const file = e.target.files[0];
  if (file) {
    uploadPoster(file)
      .then((response) => {
        const uploadedUrl = response?.data?.fileUrl;
        if (uploadedUrl) {
          setImageUrl(uploadedUrl);
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

export const handleRemoveImage = (setImageUrl) => {
  setImageUrl('');
};

export const handleSave = (payload, editMovieMutation, closeModal) => {
  editMovieMutation.mutate(payload, {
    onSuccess: () => {
      alert("영화 정보가 성공적으로 수정되었습니다.");
      closeModal();
    },
    onError: (error) => {
      alert(`영화 정보 수정 실패: ${error.message}`);
    },
  });
};