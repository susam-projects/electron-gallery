import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import DropZone from '../../../Common/UI/Component/DropZone/DropZone';
import styles from './CollectionCreatorPageContent.module.scss';

function CollectionCreatorPageContent({
  collectionName,
  onCollectionNameChanged,
  onFilesSelected,
  onCreateCollectionClick,
  fileList,
  isLoading,
}) {
  const onCollectionNameInputChange = useCallback(
    (event) => {
      onCollectionNameChanged(event?.target?.value);
    },
    [onCollectionNameChanged],
  );

  return (
    <div className={styles.panel}>
      <input
        className={styles.input}
        placeholder={'Collection Name'}
        value={collectionName}
        onChange={onCollectionNameInputChange}
      />

      <DropZone
        classes={{
          root: styles.uploader,
          rootActive: styles.active,
          prompt: styles.uploadPrompt,
        }}
        accept={['.jpg', '.jpeg', '.png']}
        onSelect={onFilesSelected}
        prompt={'Click or drag some images'}
      />

      <button
        onClick={onCreateCollectionClick}
        className={styles.createButton}
        disabled={isLoading}
      >
        Create collection
      </button>

      <ul className={styles.uploadedList}>
        <For each="file" index="i" of={fileList}>
          <li className={styles.uploadedListItem} key={i}>
            {file.path}
          </li>
        </For>
      </ul>
    </div>
  );
}

CollectionCreatorPageContent.propTypes = {
  collectionName: PropTypes.string,
  onCollectionNameChanged: PropTypes.func,
  onFilesSelected: PropTypes.func,
  onCreateCollectionClick: PropTypes.func,
  fileList: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

export default CollectionCreatorPageContent;
