import styled from 'styled-components';
import { AlarmHistorys } from '../data/alarmhistory';

const AlarmHistoryList = () => {
  return (
    <S.ListWrapper>
      {AlarmHistorys.map((AlarmHistorys) => (
        <S.ListItem key={AlarmHistorys.id}>
          <S.AvatarWrapper>
            <S.Avatar src={AlarmHistorys.avatar} alt="알림 아바타" />
          </S.AvatarWrapper>
          <S.MessageWrapper>
            <S.TextWrapper>
              <S.Message>{AlarmHistorys.message}</S.Message>
              <S.TimeAgo>{AlarmHistorys.timeAgo}</S.TimeAgo>
            </S.TextWrapper>
            
          </S.MessageWrapper>
        </S.ListItem>
      ))}
    </S.ListWrapper>
  );
};

export default AlarmHistoryList;

const S = {
  ListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    border: 1px so;
    list-style: none;
    padding: 1rem 0;
    margin: 0;
  `,

  ListItem: styled.li`
    width: 100%;
    max-width: 38rem;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0 0.9rem;
  `,

  AvatarWrapper: styled.div`
    width: 50px;
    height: 50px;
    margin-right: 0.7rem;
  `,

  Avatar: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `,

  MessageWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; /* 텍스트와 이모티콘 간격을 양 끝으로 */
    width: 100%;
    height: 78px;
  `,

  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; /* 수직 중앙 정렬 */
    flex: 1; /* 남은 공간 채우기 */
  `,

  Message: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontBlack};
    margin: 0 0 2px;
  `,

  TimeAgo: styled.div`
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  Emoji: styled.span`
    font-size: 1.2rem;
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */
    margin-left: 1rem;
  `,
};
