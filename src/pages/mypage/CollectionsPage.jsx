import React from "react";
import NoResult from "../../components/Collections/NoResult";
import CollectionsOverview from "../../components/Collections/CollectionsOverview";
import CreateCollection from "../../components/Collections/CreateCollection";
import CollectionList from "../../components/Collections/CollectionList"; 
import useCollectionsStore from "../../store/collections/useCollectionsStore";

const CollectionsPage = () => {
  const { collections, isCreating, setIsCreating } = useCollectionsStore();

  return (
    <div>
      {!isCreating && (
        <>
          
          <CollectionsOverview onCreate={() => setIsCreating(true)} />
          
          {collections.length === 0 ? (
            <NoResult message="결과가 없어요" />
          ) : (
            <CollectionList collections={collections} />
          )}
        </>
      )}
      {isCreating && <CreateCollection />}
    </div>
  );
};

export default CollectionsPage;
