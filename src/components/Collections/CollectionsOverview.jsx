import styled from "styled-components";
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
    flex: 1;
    width: 100%;
    max-width: 40rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0.75rem, 0, 0.87rem 0;
  `,

  Title: styled.h1`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.5rem;
    margin: 0; 
  `,

  Button: styled.a`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
  `,
};
