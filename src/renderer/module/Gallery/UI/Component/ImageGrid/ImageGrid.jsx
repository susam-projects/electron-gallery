import React from 'react';
import PropTypes from 'prop-types';
import StackGrid from 'react-stack-grid';
import ImageCard from '../ImageCard/ImageCard';

function ImageGrid({ images, onClick = () => {} }) {
  const preparedImages = images.map((it) => {
    if (typeof it === 'string') {
      return { name: '01.jpg', src: it };
    }
    return it;
  });

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
      <For each="image" index="i" of={preparedImages}>
        <ImageCard
          key={image.src}
          image={image.src}
          title={image.name}
          onClick={() => onClick(i)}
        />
      </For>
    </StackGrid>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        src: PropTypes.string,
      }),
    ),
  ]).isRequired,
  onClick: PropTypes.func,
};

export default ImageGrid;
