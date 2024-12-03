import styled from 'styled-components';
import { useEffect } from 'react';
import ModalInput from '../../components/features/auth/ModalInput';
import AuthButton from '../../components/features/auth/Authbutton';
import AuthTitle from '../../components/features/auth/AuthTitle';
import AuthMessage from '../../components/features/auth/AuthMessage';
import Authlink from '../../components/features/auth/Authlink';
import useAuthStore from '../../store/auth/authStore';
import { loginInput } from '../../data/auth/input';

function Login() {
  const { email, password, setEmail, setPassword, resetAuthData } = useAuthStore();

  const userData = {
    username: email,
    password,
  };
  useEffect(() => {
    resetAuthData();
  }, []);
  return (
    <>
      <S.AuthBody>
        <AuthTitle value={loginInput.title} />
        <S.Container>
          <ModalInput
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ModalInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthButton value={loginInput.title} userData={userData} />
          <S.AuthWrapper>
            <AuthMessage value={loginInput.message} />
            <Authlink
              value={loginInput.title === '로그인' ? '회원가입' : '로그인'}
              link={loginInput.title === '로그인' ? '/register' : '/login'}
            />
          </S.AuthWrapper>
        </S.Container>
        <S.Divider>
          <S.Line />
          <S.Dividertext>OR</S.Dividertext>
          <S.Line />
        </S.Divider>
      </S.AuthBody>
    </>
  );
}

export default Login;
const S = {
  AuthBody: styled.div`
    width: 20rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    background-color: ${(props) => props.theme.color.mainColor};
    color: ${(props) => props.theme.color.fontBlack};
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
    margin: 10rem auto;
  `,
  Container: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Divider: styled.section`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    width: 100%;
  `,

  Line: styled.div`
    flex: 1;
    height: 0.1rem;
    background-color: ${(props) => props.theme.color.fontGray};
  `,

  Dividertext: styled.div`
    margin: 0 1rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  AuthWrapper: styled.section`
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  `,
};
