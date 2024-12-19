import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CollectionsOverview = ({ userId }) => {
  const navigate = useNavigate();

  const CollectionsLabel = {
    CollectionManagement: '컬렉션',
    AddCollections: '새 컬렉션 추가',
  };

  const handleAddClick = () => {
    navigate(`/mypage/collections/create/${userId}`);
  };

  return (
    <S.Container>
      <S.Title>{CollectionsLabel.CollectionManagement}</S.Title>
      <S.Button onClick={handleAddClick}>{CollectionsLabel.AddCollections}</S.Button>
    </S.Container>
  );
};

export default CollectionsOverview;

const S = {
  Container: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
    padding: 0.7rem 0 0.8rem 0;
  `,

  Title: styled.h1`
    margin: 0;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.5rem;
  `,

  Button: styled.a`
    background: none;
    border: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
    transition: color 0.3s ease;
  `,
};
