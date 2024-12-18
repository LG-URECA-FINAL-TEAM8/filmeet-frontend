import { useParams } from 'react-router-dom';
import useCollectionsStore from '../../../store/collections/useCollectionsStore';
import CollectionDetail from '../../../components/collection/CollectionDetail';
import { Wrapper } from '../../../styles/collectionspage/collections';
import { useEffect } from 'react';
import { useUserInfo } from '../../../apis/users/queries';
import Loading from '../../../components/common/loading/Loading';

const CollectionDetailPage = () => {
  const { collectionId } = useParams();
  const {
    collectionDetail,
    fetchCollectionDetail,
    fetchCollectionMovies,
    collectionMovies,
    isLoading,
    error,
  } = useCollectionsStore();

  const { data: userResult } = useUserInfo(); // 유저 정보 가져오기
  const userInfo = userResult?.data; // 로그인한 유저 정보

  useEffect(() => {
    if (collectionId) {
      fetchCollectionDetail(collectionId); // 컬렉션 상세 데이터 가져오기
      fetchCollectionMovies(collectionId); // 컬렉션에 포함된 영화 데이터 가져오기
    }
  }, [collectionId, fetchCollectionDetail, fetchCollectionMovies]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>오류 발생: {error.message}</div>;
  }

  if (!collectionDetail) {
    return <div>컬렉션 상세 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <Wrapper>
      <CollectionDetail
        collectionData={collectionDetail}
        movies={collectionMovies}
        userInfo={userInfo}
      />
    </Wrapper>
  );
};

export default CollectionDetailPage;
