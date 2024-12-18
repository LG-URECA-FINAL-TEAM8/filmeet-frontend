import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RankButton = () => {
    const navigate = useNavigate(); // 경로 이동을 위한 훅

    const handleNavigateToRank = () => {
      navigate("/worldcuprank"); // 이동할 경로
    };

  return (
    <S.ButtonContainer>
      <S.Button onClick={handleNavigateToRank}>랭킹 보기</S.Button>
    </S.ButtonContainer>
  );
};

export default RankButton;

const S = {
    ButtonContainer: styled.div`
      text-align: center;
    `,
  
    Button: styled.button`
      width: 9rem;
      padding: 1rem 1rem;
      font-size: 1.5rem;
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      background-color: ${(props) => (props.isLoading ? "#ccc" : props.theme.color.fontGray)};
      color: #fff;
      border: none;
      border-radius: 0.7rem;
      cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: ${(props) =>
          props.isLoading ? "#ccc" : props.theme.color.fontPink};
      }
    `,
  };
  
