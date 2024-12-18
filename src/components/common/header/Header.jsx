import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../../store/user/userStore';
import { AUTH_BUTTONS, HEADER_BUTTONS } from '../../../data/header/header';
import useWorldcupStore from '../../../store/worldcup/worldcupStore';
import { useCreateGame } from '../../../apis/worldcup/queries';
import { createWorldcupGame } from '../../../utils/worldcup/createWorldcupGame';
import SearchBar from '../searchbar/SearchBar';
function Header() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const userInfo = useUserStore((state) => state.userInfo);

  const { setGameId, setGameStarted, setCurrentRound } = useWorldcupStore();
  const createGameMutation = useCreateGame();

  const handleButtonClick = (title, route) => {
    setActiveButton(title);

    if (route === '/worldcup') {
      createWorldcupGame(
        createGameMutation.mutate,
        setGameId,
        setGameStarted,
        setCurrentRound,
        navigate,
        route
      );
    } else if (route) {
      navigate(route);
    }
  };

  const renderButtons = (buttons) =>
    buttons.map(({ title, route }, index) => (
      <Button
        key={index}
        onClick={() => handleButtonClick(title, route)}
        active={activeButton === title}>
        {title}
      </Button>
    ));

  return (
    <S.DefaultHeader>
      <S.HeaderSection>{renderButtons(HEADER_BUTTONS)}</S.HeaderSection>
      <S.HeaderSection>
        {userInfo.nickname ? (
          <>
            <SearchBar />
            <Button onClick={() => navigate('/notifications')}>알림</Button>
            <Button onClick={() => navigate('/review')}>평가하기</Button>
            <S.MyButton onClick={() => navigate(`/mypage/${userInfo.id}`)}>
              <S.ProfileImg
                src={userInfo?.profileImage || 'https://via.placeholder.com/40'}
                alt="프로필 이미지"
              />
              <S.ProfileName>{userInfo.nickname}</S.ProfileName>
            </S.MyButton>
          </>
        ) : (
          renderButtons(AUTH_BUTTONS)
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
    display: flex;
    align-items: center;
  `,

  MyButton: styled.button`
    gap: 0.5rem;
    width: 5.8rem;
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 1rem;
    margin-right: 2rem;
    border: none;
    cursor: pointer;
  `,

  ProfileImg: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  `,

  ProfileName: styled.span`
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
};

export default Header;
