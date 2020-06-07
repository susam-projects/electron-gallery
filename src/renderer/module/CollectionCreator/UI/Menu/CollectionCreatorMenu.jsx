import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './CollectionCreatorMenu.module.scss';
import * as classnames from 'classnames';

function CollectionCreatorMenu({ routePrefix: base }) {
  const location = useLocation();
  const currentUrl = location.pathname;

  console.log(currentUrl, base);

  return (
    <>
      <li
        className={classnames({
          [styles.menuItem]: true,
          [styles.upload]: true,
          [styles.active]: currentUrl === `${base}`,
        })}
      >
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
