import { useUserInfo } from '../../../apis/users/queries';
import CollectionList from '../../../components/collection/CollectionList';
import CollectionsOverview from '../../../components/collection/CollectionsOverview';
import useCollectionsStore from '../../../store/collections/useCollectionsStore';
import { CollectionPageWrapper } from '../../../styles/collectionspage/collections';

const CollectionsPage = () => {
  const { collections } = useCollectionsStore();
  const { data: userInfo } = useUserInfo();
  const userId = userInfo?.data?.id;

  return (
    <CollectionPageWrapper>
      <CollectionsOverview />
      <CollectionList userId={userId} collections={collections}/>
    </CollectionPageWrapper>
  );
};

export default CollectionsPage;
