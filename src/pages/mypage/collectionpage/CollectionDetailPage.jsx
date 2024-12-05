import { useParams } from "react-router-dom";
import useCollectionsStore from "../../../store/collections/useCollectionsStore";
import CollectionDetail from "../../../components/collections/CollectionDetail";
import { Wrapper } from "../../../styles/collectionspage/collections";

const CollectionDetailPage = () => {
  const { collectionId } = useParams();
  const { collections } = useCollectionsStore();
  const collectionData = collections.find((col) => col.id === parseInt(collectionId, 10));

  if (!collectionData) {
    return <div>존재하지 않는 컬렉션입니다.</div>;
  }

  return (
    <Wrapper>      
        <CollectionDetail collectionData={collectionData} />
    </Wrapper>
  );
};

export default CollectionDetailPage;
