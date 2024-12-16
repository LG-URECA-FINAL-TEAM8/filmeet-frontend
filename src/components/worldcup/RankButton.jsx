import styled from "styled-components";

const RankButton = () => {

  return (
    <S.ButtonContainer>
      <S.Button>랭킹 보기</S.Button>
    </S.ButtonContainer>
  );
};

export default RankButton;

const S = {
  ButtonContainer: styled.div`
    text-align: center;
  `,

  Button: styled.button`
    width: 15rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    background-color: ${(props) => (props.isLoading ? "#ccc" : props.theme.color.fontGray)};
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.isLoading ? "#ccc" : props.theme.color.generePinkColor};
    }
  `,
};
