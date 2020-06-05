import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ImageViewer from '../Component/ImageViewer/ImageViewer';
import ImageGrid from '../Component/ImageGrid/ImageGrid';

function Images({ srcSet }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setViewerIsOpen] = useState(false);

  const openViewer = useCallback((index) => {
    setSelectedImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeViewer = useCallback(() => {
    setSelectedImage(0);
    setViewerIsOpen(false);
  }, []);

  return (
    <>
      <ImageGrid images={srcSet} onClick={openViewer} />
      <ImageViewer
        images={srcSet}
        selectedImage={selectedImage}
        isOpen={isViewerOpen}
        onClose={closeViewer}
      />
    </>
  );
}

Images.propTypes = {
  srcSet: PropTypes.arrayOf(PropTypes.string),
};

export default Images;
