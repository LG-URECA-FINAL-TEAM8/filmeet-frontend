import ReactModal from 'react-modal';
import useModalStore from '../../../store/modal/useModalStore';
import useAuthStore from '../../../store/auth/authStore';
import styled from 'styled-components';
import ModalInput from '../../Features/auth/ModalInput';
import Authbutton from '../../Features/auth/Authbutton';
import AuthTitle from '../../Features/auth/AuthTitle';
import AuthMessage from '../../Features/auth/AuthMessage';
import Authlink from '../../Features/auth/Authlink';

ReactModal.setAppElement('#root');

function UserModal() {
  const { isModalOpen, closeModal, modalTitle, modalMessage } = useModalStore();
  const { nickname, email, password, setNickname, setEmail, setPassword } = useAuthStore();

  const userData = {
    username: email,
    password,
    nickname,
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="User Modal">
      <AuthTitle value={modalTitle} />
      <Container>
        {modalTitle === '회원가입' && (
          <ModalInput
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        )}
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
        <Authbutton value={modalTitle} userData={userData} />
        <AuthWrapper>
          <AuthMessage value={modalMessage} />
          <Authlink value={modalTitle === '로그인' ? '회원가입' : '로그인'} />
        </AuthWrapper>
      </Container>
      <Divider>
        <Line />
        <Dividertext>OR</Dividertext>
        <Line />
      </Divider>
    </ReactModal>
  );
}

export default UserModal;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.section`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;
`;

const Line = styled.div`
  flex: 1;
  height: 0.1rem;
  background-color: ${(props) => props.theme.color.fontGray};
`;

const Dividertext = styled.div`
  margin: 0 1rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.fontGray};
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const AuthWrapper = styled.section`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: '20rem',
    height: 'auto',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)`,
    overflow: 'auto',
  },
};
