import React from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';

function ImageViewer({ images, selectedImage, onClose, isOpen }) {
  return (
    <ModalGateway>
      <If condition={isOpen}>
        <Modal onClose={onClose}>
          <Carousel
            styles={{
              view: (base) => ({
                ...base,
                '& > img': {
                  maxHeight: '100vh',
                },
              }),
            }}
            currentIndex={selectedImage}
            views={images.map((image) => {
              if (typeof image === 'string') {
                return { title: '01.jpg', src: image };
              }
              return { title: image.name, src: image.src };
            })}
          />
        </Modal>
      </If>
    </ModalGateway>
  );
}

ImageViewer.propTypes = {
  isOpen: PropTypes.bool,
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        src: PropTypes.string,
      }),
    ),
  ]).isRequired,
  selectedImage: PropTypes.number,
  onClose: PropTypes.func,
};

export default ImageViewer;
