import React from 'react';
import PropTypes from 'prop-types';
import StackGrid from 'react-stack-grid';
import ImageCard from '../ImageCard/ImageCard';

function ImageGrid({ images, onClick = () => {} }) {
  return (
    <StackGrid
      columnWidth={300}
      gutterWidth={20}
      gutterHeight={20}
      component="ul"
      itemComponent="li"
      monitorImagesLoaded
      vendorPrefix
    >
      <For each="imagePath" index="i" of={images}>
        <ImageCard
          key={imagePath}
          image={imagePath}
          title="01.jpg"
          onClick={() => onClick(i)}
        />
      </For>
    </StackGrid>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

export default ImageGrid;
