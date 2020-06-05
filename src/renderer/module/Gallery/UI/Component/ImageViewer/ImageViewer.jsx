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
            views={images.map((image) => ({
              src: image,
            }))}
          />
        </Modal>
      </If>
    </ModalGateway>
  );
}

ImageViewer.propTypes = {
  isOpen: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedImage: PropTypes.number,
  onClose: PropTypes.func,
};

export default ImageViewer;
