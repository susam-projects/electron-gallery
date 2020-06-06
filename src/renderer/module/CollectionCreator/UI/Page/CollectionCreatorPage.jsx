import React, { useCallback, useState } from 'react';
import CollectionCreatorPageContent from '../Layout/CollectionCreatorPageContent';
import uploaderService from '../../Service/CollectionCreatorService';

function CollectionCreatorPage() {
  const [collectionName, setCollectionName] = useState('');
  const [collectionImages, setCollectionImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onCollectionNameChanged = useCallback((name) => {
    setCollectionName(name);
  }, []);

  const onFilesSelect = useCallback((newImages) => {
    setCollectionImages((oldImages) => oldImages.concat(newImages));
  }, []);

  const onCreateCollectionClick = useCallback(() => {
    if (!collectionName) {
      alert('Please specify collection name!');
      return;
    }

    if (!collectionImages.length) {
      alert('Please select some images!');
      return;
    }

    setIsLoading(true);
    uploaderService
      .createCollection(collectionName, collectionImages)
      .then(() => {
        console.log('success');
      })
      .catch(() => {
        console.log('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [collectionName, collectionImages]);

  return (
    <CollectionCreatorPageContent
      collectionName={collectionName}
      onCollectionNameChanged={onCollectionNameChanged}
      onCreateCollectionClick={onCreateCollectionClick}
      fileList={collectionImages}
      onFilesSelected={onFilesSelect}
      isLoading={isLoading}
    />
  );
}

export default CollectionCreatorPage;
