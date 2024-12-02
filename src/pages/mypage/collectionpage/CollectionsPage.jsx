import CollectionsOverview from "../../../components/Collections/CollectionsOverview";
import useCollectionsStore from "../../../store/collections/useCollectionsStore";
import CollectionList from "../../../components/Collections/CollectionList";



const CollectionsPage = () => {
  const { collections } = useCollectionsStore();

  return (
    <>
      <CollectionsOverview />
      <CollectionList collections={collections} />
    </>  
  );
};

export default CollectionsPage;