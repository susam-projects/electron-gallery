import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CollectionCreatorMenu.module.scss';
import * as classnames from 'classnames';

function CollectionCreatorMenu({ routePrefix: base }) {
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

CollectionCreatorMenu.propTypes = {
  routePrefix: PropTypes.string,
};

export default CollectionCreatorMenu;
