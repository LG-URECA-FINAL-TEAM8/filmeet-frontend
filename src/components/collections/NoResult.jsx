import styled from "styled-components";

export const NoResult = () => {
  const NoResultContent = {
    NoData: "결과가 없어요",
  };

  return (
    <S.Wrapper>
      <S.Icon />
      <S.Message>{NoResultContent.NoData}</S.Message>
    </S.Wrapper>
  );
};

export default NoResult;

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  `,

  Icon: styled.div`
    width: 3rem;
    height: 3rem;
    background: url("https://an2-img.amz.wtchn.net/image/ic_empty_state.svg") center/contain no-repeat;
    margin-bottom: 1rem;
  `,

  Message: styled.div`
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
};
