import styled from "styled-components";

const ErrorContent = ({
  title = "404",
  message = "죄송합니다. 페이지를 찾을 수 없습니다. T T",
  subMessage = "찾으려는 페이지가 이동되었거나, 삭제되었거나, 존재하지 않는 것 같습니다.",
  buttonText = "메인 페이지로 가기",
  onButtonClick = () => (window.location.href = "/"),
}) => {
  return (
    <S.ErrorWrapper>
      <S.ErrorTitle>{title}</S.ErrorTitle>
      <S.ErrorMessage>{message}</S.ErrorMessage>
      <S.ErrorSubMessage>{subMessage}</S.ErrorSubMessage>
      <S.MainPageButton onClick={onButtonClick}>{buttonText}</S.MainPageButton>
    </S.ErrorWrapper>
  );
};

export default ErrorContent;

const S = {
  ErrorWrapper: styled.div`
    text-align: center;
    padding: 2rem;
  `,
  ErrorTitle: styled.h1`
    font-size: 7.5rem;
    font-weight: ${(props) => props.theme.font.fontWeightBold};
    color: ${(props) => props.theme.color.generePinkColor};
    margin-bottom: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,
  ErrorMessage: styled.p`
    font-size: 2rem;
    color: ${(props) => props.theme.color.fontGray};
    margin-bottom: 2rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
  ErrorSubMessage: styled.p`
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.fontGray};
    margin-bottom: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
  MainPageButton: styled.button`
    background-color: ${(props) => props.theme.color.generePinkColor};
    color: ${(props) => props.theme.color.fontWhite};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.font.fontWeightMedium};
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: ${(props) => props.theme.font.fontSuitRegular};

    &:hover {
      background-color: ${(props) => props.theme.color.fontPink};
    }
  `,
};
