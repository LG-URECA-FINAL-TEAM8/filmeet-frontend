import styled from "styled-components";

export const NoResult = () => {
  const NoResultContent = {
    NoData: "결과가 없어요"
  };

  return (
    <NoResultWrapper>
      <NoResultIcon />
      <NoResultMessage>{NoResultContent.NoData}</NoResultMessage>
    </NoResultWrapper>
  );
};

export default NoResult;

const NoResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const NoResultIcon = styled.div`
  width: 48px;
  height: 48px;
  background: url("https://an2-img.amz.wtchn.net/image/ic_empty_state.svg") center/contain no-repeat;
  margin-bottom: 16px;
`;

const NoResultMessage = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.color.fontGray};
`;
