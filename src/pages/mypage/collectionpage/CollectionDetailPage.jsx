import { useParams } from 'react-router-dom';
import useCollectionsStore from '../../../store/collections/useCollectionsStore';
import CollectionDetail from '../../../components/collection/CollectionDetail';
import { Wrapper } from '../../../styles/collectionspage/collections';
import { useEffect } from 'react';

const CollectionDetailPage = () => {
  const { collectionId } = useParams();
  const { collectionDetail, fetchCollectionDetail, isLoading, error } = useCollectionsStore();

  useEffect(() => {
    if (collectionId) {
      fetchCollectionDetail(collectionId);
    }
  }, [collectionId, fetchCollectionDetail]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류 발생: {error}</div>;
  }

  if (!collectionDetail) {
    return <div>컬렉션 상세 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <Wrapper>
      <CollectionDetail collectionData={collectionDetail} />
    </Wrapper>
  );
};

export default CollectionDetailPage;
