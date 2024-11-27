import styled from 'styled-components';
import { useSignUpMutation } from '../../../hooks/auth/useSignUpMutation';

const Authbutton = ({ value, userData }) => {
  const signupMutate = useSignUpMutation(value);

  const handleClick = () => {
    console.log('보낼 데이터:', userData);
    if (userData && value === '회원가입') {
      signupMutate.mutate(userData);
    } else {
      console.error('잘못된 데이터');
    }
  };

  return <S.StyledButton onClick={handleClick}>{value}</S.StyledButton>;
};

export default Authbutton;

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
