import styled from "styled-components";
import { lightTheme } from "../../styles/themes";
import { useNavigate } from "react-router-dom";

const CollectionsOverview = () => {
  const navigate = useNavigate();

  const CollectionsLabel = {
    CollectionManagement: "컬렉션",
    AddCollections: "새 컬렉션 추가",
  };

  const handleAddClick = () => {
    navigate("/mypage/collections/create");
  }

  return (
    <S.Container>
      <S.Title>{CollectionsLabel.CollectionManagement}</S.Title>
      <S.Button onClick={handleAddClick}>
        {CollectionsLabel.AddCollections}
      </S.Button>
    </S.Container>
  );
};

export default CollectionsOverview;

const S = {
  Container: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem auto 3rem;
    max-width: 40rem;
    width: 100%;
  `,

  Title: styled.h1`
    font-family: ${lightTheme.fontSuitBold};
    font-size: 1.5rem;
    color: ${lightTheme.fontBlack};
    margin: 0;
  `,

  Button: styled.button`
    font-size: 1rem;
    color: ${lightTheme.fontPink};
    font-family: ${lightTheme.fontSuitRegular};
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${lightTheme.hoverPink};
    }
  `,
};
