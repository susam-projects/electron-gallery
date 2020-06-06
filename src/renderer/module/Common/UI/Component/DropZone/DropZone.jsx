import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import * as classnames from 'classnames';

function DropZone({ classes = {}, accept, onSelect, prompt }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop: onSelect,
  });

  return (
    <div
      {...getRootProps({
        className: classnames({
          [classes.root]: true,
          [classes.rootActive]: isDragActive,
        }),
      })}
    >
      <input {...getInputProps()} />
      <div className={classes.prompt}>{prompt}</div>
    </div>
  );
}

DropZone.propTypes = {
  className: PropTypes.string,
  accept: PropTypes.string,
  onSelect: PropTypes.func,
  prompt: PropTypes.string,
};

export default DropZone;
