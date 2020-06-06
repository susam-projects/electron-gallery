import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './UploaderMenu.module.scss';
import * as classnames from 'classnames';

function UploaderMenu({ routePrefix: base }) {
  return (
    <>
      <li className={classnames(styles.menuItem, styles.upload)}>
        <Link to={`${base}`} className={styles.menuLink}>
          Upload
        </Link>
      </li>
    </>
  );
}

UploaderMenu.propTypes = {
  routePrefix: PropTypes.string,
};

export default UploaderMenu;
