import { useEffect } from 'react';
import CollectionList from '../../../components/collection/CollectionList';
import CollectionsOverview from '../../../components/collection/CollectionsOverview';
import useCollectionsStore from '../../../store/collections/useCollectionsStore';
import { CollectionPageWrapper } from '../../../styles/collectionspage/collections';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/common/loading/Loading';
import { useUserInfo } from '../../../apis/users/queries';

const CollectionsPage = () => {
  const { userId } = useParams();
  const { data: userInfo } = useUserInfo();
  const myUserId = userInfo?.data?.id;
  const { collections, fetchCollections, isLoading, error } = useCollectionsStore();
  // 서버에서 컬렉션 데이터 가져오기
  useEffect(() => {
    if (userId) {
      fetchCollections(userId, 0, 10); // 페이지 0, 크기 10
    }
  }, [userId, fetchCollections]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading collections: {error.message}</div>;
  }

  return (
    <CollectionPageWrapper>
      <CollectionsOverview userId={userId} myUserId={myUserId} />
      <CollectionList collections={collections} />
    </CollectionPageWrapper>
  );
};

export default CollectionsPage;
