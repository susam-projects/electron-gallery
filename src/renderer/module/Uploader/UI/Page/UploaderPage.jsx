import React from 'react';
import styles from './Uploader.module.scss';

function UploaderPage() {
  // - поле для названия
  // - поле для перетаскивания
  // - список файлов
  return (
    <div>
      <div className={styles.panel}>
        <input className={styles.input} placeholder={'Collection Name'} />
        <div className={styles.uploader}>
          <div className={styles.uploadPrompt}>Click or drag some images</div>
        </div>
        <div className={styles.createButton}>Create collection</div>
        <ul className={styles.uploadedList}>
          <li className={styles.uploadedListItem}>
            {'/home/test/test-image.jpg'}
          </li>
          <li className={styles.uploadedListItem}>
            {'/home/test/test-image.jpg'}
          </li>
          <li className={styles.uploadedListItem}>
            {'/home/test/test-image.jpg'}
          </li>
          <li className={styles.uploadedListItem}>
            {'/home/test/test-image.jpg'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UploaderPage;
