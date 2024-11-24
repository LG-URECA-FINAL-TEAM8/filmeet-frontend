import React, { useState } from "react";
import NoResult from "../../components/Collections/NoResult";
import CollectionsOverview from "../../components/Collections/CollectionsOverview";
import CreateCollection from "../../components/Collections/CreateCollection";
import CollectionList from "../../components/Collections/CollectionList";
import CollectionDetail from "../../components/Collections/CollectionDetail";
import useCollectionsStore from "../../store/collections/useCollectionsStore";

const CollectionsPage = () => {
  const { collections, isCreating, setIsCreating } = useCollectionsStore();
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleSelectCollection = (collection) => {
    setSelectedCollection(collection);
  };

  const handleBackToList = () => {
    setSelectedCollection(null);
  };

  return (
    <div>
      {!isCreating && !selectedCollection && (
        <>
          <CollectionsOverview onCreate={() => setIsCreating(true)} />
          {collections.length === 0 ? (
            <NoResult message="결과가 없어요" />
          ) : (
            <CollectionList
              collections={collections}
              onSelectCollection={handleSelectCollection}
            />
          )}
        </>
      )}

      {isCreating && <CreateCollection />}

      {selectedCollection && (
        <CollectionDetail
          collectionData={selectedCollection}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
};

export default CollectionsPage;