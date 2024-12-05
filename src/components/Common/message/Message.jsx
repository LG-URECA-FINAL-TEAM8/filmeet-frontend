import styled from 'styled-components';

function Message() {
  return (
    <>
      <S.MessageSection>이메일 양식으로 입력</S.MessageSection>
    </>
  );
}

const S = {
  MessageSection: styled.section`
    display: flex;
    width: 100%;
    height: 2rem;
    font-size: 0.7rem;
    justify-content: flex-start;
    align-items: center;
    margin-left: 12px;
    margin-bottom: 12px;
    color: ${(props) => props.theme.color.fontPink};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
};

export default Message;
