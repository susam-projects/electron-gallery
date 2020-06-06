import React, { useCallback, useState } from 'react';
import UploaderPageContent from '../Layout/UploaderPageContent';

function UploaderPage() {
  const [collectionName, setCollectionName] = useState('');
  const [collectionImages, setCollectionImages] = useState([]);

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

    console.log(
      'need to create a collection',
      collectionName,
      collectionImages,
    );
  }, [collectionName, collectionImages]);

  return (
    <UploaderPageContent
      collectionName={collectionName}
      onCollectionNameChanged={onCollectionNameChanged}
      onCreateCollectionClick={onCreateCollectionClick}
      fileList={collectionImages}
      onFilesSelected={onFilesSelect}
    />
  );
}

export default UploaderPage;
