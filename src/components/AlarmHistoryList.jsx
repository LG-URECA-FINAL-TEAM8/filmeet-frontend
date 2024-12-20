import styled from 'styled-components';
import { useNotification } from '../apis/notifications/query';

const AlarmHistoryList = () => {
  const { data: notification } = useNotification();
  const NotificationData = notification?.data?.content || [];

  return (
    <S.ListWrapper>
      {NotificationData.map((AlarmHistory) => (
        <S.ListItem key={AlarmHistory.id}>
          <S.AvatarWrapper>
            <S.Avatar src={AlarmHistory?.sender?.profileImage} alt="유저 프로필" />
          </S.AvatarWrapper>
          <S.MessageWrapper>
            <S.TextWrapper>
              <S.Message>
                {AlarmHistory.message
                  .split(/(좋아요|팔로우|댓글)/)
                  .map((part, id) =>
                    part === '댓글' ? (
                      <S.BoldHighlight key={id}>{part}</S.BoldHighlight>
                    ) : ['좋아요', '팔로우'].includes(part) ? (
                      <S.Highlight key={id}>{part}</S.Highlight>
                    ) : (
                      part
                    )
                  )}
              </S.Message>
              <S.TimeAgo>{AlarmHistory.timeAgo}</S.TimeAgo>
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
    width: 40rem;
    padding: 1rem 0;
    margin: 0;
  `,

  ListItem: styled.li`
    display: flex;
    align-items: center;
    width: 38.75rem;
    max-width: 38rem;
    height: auto;
    padding: 0 0 0 15rem;
    margin: 0;
  `,

  AvatarWrapper: styled.div`
    width: 3.12rem;
    height: 3.12rem;
    margin-right: 0.43rem;
  `,

  Avatar: styled.img`
    width: 3.12rem;
    height: 3.12rem;
    border-radius: 50%;
  `,

  MessageWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4.87rem;
  `,

  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  `,

  Message: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontBlack};
    margin: 0 0 0.12rem;
  `,

  Highlight: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontPink};
  `,

  BoldHighlight: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
  `,

  TimeAgo: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  Emoji: styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin-left: 1rem;
  `,
};
