import { useEffect, useState } from 'react';
import AuthInput from '../../components/features/auth/AuthInput';
import AuthButton from '../../components/features/auth/Authbutton';
import AuthTitle from '../../components/features/auth/AuthTitle';
import AuthMessage from '../../components/features/auth/AuthMessage';
import Authlink from '../../components/features/auth/Authlink';
import useAuthStore from '../../store/auth/authStore';
import { registerInput } from '../../data/auth/input';
import Message from '../../components/common/message/Message';
import { validateEmail, validatePassword } from '../../utils/auth/registerHandler';
import useErrorStore from '../../store/auth/errorStore';
import { NaverLogo, GoogleLogo } from '../../assets/svg';
import { handleLoginClick } from '../../utils/auth/socialLoginHandler';
import { S } from '../../styles/auth/auth';

function Register() {
  const { nickname, email, password, setEmail, setPassword, setNickname, resetAuthData } =
    useAuthStore();
  const ErrorCode = useErrorStore();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const userData = {
    nickname,
    username: email,
    password,
  };

  useEffect(() => {
    resetAuthData();
  }, []);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  useEffect(() => {
    if (ErrorCode.code === 40202) {
      setEmailError('중복된 이메일입니다');
    }
  }, [ErrorCode.code]);

  const isFormValid = validateEmail(email) === '' && validatePassword(password) === '';

  return (
    <>
      <S.AuthBody>
        <AuthTitle value={registerInput.title} />
        <S.Container>
          <AuthInput
            type="nickname"
            placeholder="이름"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          {ErrorCode.code === 40203 && <Message text={'중복된 닉네임입니다.'} />}
          <AuthInput type="email" placeholder="이메일" value={email} onChange={handleEmailChange} />
          {emailError && <Message text={emailError} />}
          <AuthInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <Message text={passwordError} />}
          <AuthButton value={registerInput.title} userData={userData} disabled={!isFormValid} />
          <S.AuthWrapper>
            <AuthMessage value={registerInput.message} />
            <Authlink
              value={registerInput.title === '로그인' ? '회원가입' : '로그인'}
              link={registerInput.title === '로그인' ? '/register' : '/login'}
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

export default Register;
