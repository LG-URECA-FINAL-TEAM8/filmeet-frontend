import { useParams } from "react-router-dom";
import useCollectionsStore from "../../../store/collections/useCollectionsStore";
import CollectionDetail from "../../../components/Collections/CollectionDetail";

const CollectionDetailPage = () => {
  const { collectionId } = useParams();
  const { collections } = useCollectionsStore();
  const collectionData = collections.find((col) => col.id === parseInt(collectionId, 10));

  console.log("collectionId from URL:", collectionId);
  console.log("collections from store:", collections);

  if (!collectionData) {
    return <div>존재하지 않는 컬렉션입니다.</div>;
  }

  return <CollectionDetail collectionData={collectionData} />;
};

export default CollectionDetailPage;
