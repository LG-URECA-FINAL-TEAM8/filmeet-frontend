import { useEffect } from 'react';
import AuthInput from '../../components/features/auth/AuthInput';
import AuthButton from '../../components/features/auth/Authbutton';
import AuthTitle from '../../components/features/auth/AuthTitle';
import AuthMessage from '../../components/features/auth/AuthMessage';
import Authlink from '../../components/features/auth/Authlink';
import useAuthStore from '../../store/auth/authStore';
import { loginInput } from '../../data/auth/input';
import { NaverLogo, GoogleLogo } from '../../assets/svg';
import { handleLoginClick } from '../../utils/auth/socialLoginHandler';
import { S } from '../../styles/auth/auth';

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
          <AuthInput
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
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
        <S.SocialWrapper>
          <NaverLogo onClick={() => handleLoginClick('naver')} />
          <GoogleLogo onClick={() => handleLoginClick('google')} />
        </S.SocialWrapper>
      </S.AuthBody>
    </>
  );
}

export default Login;
