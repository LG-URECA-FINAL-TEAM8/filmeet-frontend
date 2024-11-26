import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/themes";
import useCollectionsStore from "../../store/collections/useCollectionsStore";

const CollectionsOverview = () => {
  const { setIsCreating } = useCollectionsStore();

  const handleAddCollection = () => {
    setIsCreating(true);
  };
  const Collectionslabel = {
    CollectionManagement: "컬렉션",
    AddCollections: "새 컬렉션 추가",
  };

  return (
    <S.CollectionsContainer>
      <S.CollectionsTitle>
        {Collectionslabel.CollectionManagement}
      </S.CollectionsTitle>
      <S.NewCollectionButton onClick={handleAddCollection}>
        {Collectionslabel.AddCollections}
      </S.NewCollectionButton>
    </S.CollectionsContainer>
  );
};

export default CollectionsOverview;

const S = {
  CollectionsContainer: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    max-width: 40rem;
    margin: 0 auto;
    width: 100%;
    margin-top: 1.5rem;
  `,

  CollectionsTitle: styled.h1`
    font-size: 1.5rem;
    font-weight: ${lightTheme.fontWeightBold};
    margin: 0;
  `,

  NewCollectionButton: styled.button`
    font-size: 1rem;
    color: ${lightTheme.fontPink};
    font-family: ${lightTheme.fontSuitRegular};
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
};
