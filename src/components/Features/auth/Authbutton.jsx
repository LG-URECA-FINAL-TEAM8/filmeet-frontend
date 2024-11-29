import styled from 'styled-components';
import { useSignUp } from '../../../apis/auth/queries';

const AuthButton = ({ value, userData, onClose }) => {
  const signupMutate = useSignUp();

  const handleClick = () => {
    if (userData && value === '회원가입') {
      signupMutate.mutate(userData, {
        onSuccess: () => {
          alert('회원가입에 성공하셨습니다.');
          onClose();
        },
        onError: () => {
          alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        },
      });
    }
  };

  return <S.StyledButton onClick={handleClick}>{value}</S.StyledButton>;
};

export default AuthButton;

const S = {
  StyledButton: styled.button`
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.color.fontPink};
    color: ${({ theme }) => theme.color.fontWhite};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.font.fontWeightBold};
    border: none;
    border-radius: 0.25rem;
    margin-top: 0.3rem;
    font-family: ${({ theme }) => theme.font.fontSuitRegular};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.color.buttonPink};
    }
  `,
};
