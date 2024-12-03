import styled from 'styled-components';
import { useSignUp, useLogin } from '../../../apis/auth/queries';
import { handleAuthClick } from '../../../utils/auth/authHandler';
import useLoginStore from '../../../store/auth/loginStore';
import { useNavigate } from 'react-router-dom';
const AuthButton = ({ value, userData }) => {
  const { mutate: signupMutate } = useSignUp();
  const { mutate: loginMutate } = useLogin();
  const setLoggedIn = useLoginStore((state) => state.setLoggedIn);
  const navigate = useNavigate();

  const handleClick = () => {
    handleAuthClick(value, userData, navigate, setLoggedIn, signupMutate, loginMutate);
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
