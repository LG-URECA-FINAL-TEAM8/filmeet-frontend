import styled from 'styled-components';
import useUserStore from '../../../store/user/userStore';
import { useNavigate } from 'react-router-dom';
const LogoutModal = ({ text }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    useUserStore.getState().resetUserInfo();
    navigate('/');
  };

  return (
    <S.LogoutWrapper>
      <S.LogoutItem onClick={handleLogout}>
        <span>{text}</span>
      </S.LogoutItem>
    </S.LogoutWrapper>
  );
};

const S = {
  LogoutWrapper: styled.div`
    position: absolute;
    right: 0;
    top: 2rem;
    width: 12rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.box.defaultBoxShadow};
    border: ${(props) => props.theme.box.defaultBorder};
    padding: 0.5rem 0;
    z-index: 10;
  `,

  LogoutItem: styled.button`
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,

  LogoutIcon: styled.span`
    font-size: 1.1rem;
  `,
};

export default LogoutModal;
