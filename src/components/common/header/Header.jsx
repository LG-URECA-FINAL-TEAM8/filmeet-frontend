import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../../store/user/userStore';

function Header() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const userInfo = useUserStore((state) => state.userInfo);

  const buttons = [
    {
      title: '홈',
      onClick: () => {
        setActiveButton('홈');
        navigate('/');
      },
    },
    { title: '탐색', onClick: () => setActiveButton('탐색') },
    { title: '장르별', onClick: () => setActiveButton('장르별') },
  ];

  const authButtons = [
    {
      title: '로그인',
      onClick: () => navigate('/login'),
    },
    {
      title: '회원가입',
      onClick: () => navigate('/register'),
    },
  ];

  const renderButtons = (buttonList, isMain = false) =>
    buttonList.map(({ title, onClick }, index) => (
      <Button key={index} onClick={onClick} active={isMain && activeButton === title}>
        {title}
      </Button>
    ));

  const handleProfileClick = () => {
    navigate('/mypage');
  };

  return (
    <S.DefaultHeader>
      <S.HeaderSection>{renderButtons(buttons, true)}</S.HeaderSection>
      <S.HeaderSection>
        {userInfo.nickname ? (
          <S.MyButton onClick={handleProfileClick}>
            <S.ProfileImg
              src={userInfo?.profileImage || 'https://via.placeholder.com/40'}
              alt="프로필 이미지"
            />
            <S.ProfileName>{userInfo?.nickname || '사용자'}</S.ProfileName>
          </S.MyButton>
        ) : (
          renderButtons(authButtons)
        )}
      </S.HeaderSection>
    </S.DefaultHeader>
  );
}

const S = {
  DefaultHeader: styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.mainColor};
    border-bottom: ${(props) => props.theme.box.defaultBorder};
    height: 5rem;
    padding: 1rem 20rem;
    box-sizing: border-box;
  `,

  HeaderSection: styled.div`
    width: 12rem;
    display: flex;
    align-items: center;
  `,
  MyButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 6.5rem;
    height: 2rem;
    padding: 0;
    border-radius: 19px;
    border: none;
    cursor: pointer;
  `,
  ProfileImg: styled.img`
    width: 2.5rem;
    height: 2rem;
    border-radius: 50%;
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ProfileName: styled.p`
    flex: 7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
};

export default Header;
