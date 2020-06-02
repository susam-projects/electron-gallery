import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageCard.module.scss';

function ImageCard({ image, title = '', onClick = () => {} }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.activeElement}>
        <img src={image} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default ImageCard;
