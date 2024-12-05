import styled from 'styled-components';
import { useSignUp, useLogin } from '../../../apis/auth/queries';
import { handleAuthClick } from '../../../utils/auth/authHandler';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import useLoginStore from '../../../store/auth/loginStore';
import { useUserInfo } from '../../../apis/users/queries';

const AuthButton = ({ value, userData, disabled }) => {
  const { mutate: signupMutate } = useSignUp();
  const { mutate: loginMutate } = useLogin();
  const queryClient = useQueryClient();
  const { setLoggedIn } = useLoginStore();
  const { refetch: refetchUserInfo } = useUserInfo();

  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;
    handleAuthClick(
      value,
      userData,
      navigate,
      signupMutate,
      loginMutate,
      queryClient,
      setLoggedIn,
      refetchUserInfo
    );
  };

  return (
    <S.StyledButton onClick={handleClick} disabled={disabled}>
      {value}
    </S.StyledButton>
  );
};
export default AuthButton;

const S = {
  StyledButton: styled.button`
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.color.fontGray : theme.color.fontPink};
    color: ${({ theme }) => theme.color.fontWhite};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.font.fontWeightBold};
    border: none;
    border-radius: 0.25rem;
    margin-top: 0.3rem;
    font-family: ${({ theme }) => theme.font.fontSuitRegular};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

    &:hover {
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.color.fontGray : theme.color.buttonPink};
    }
  `,
};
