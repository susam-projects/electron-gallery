import React from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './GalleryMenuItems.module.scss';

export function HomeLink({ link, currentUrl }) {
  return (
    <li
      className={classnames({
        [styles.menuItem]: true,
        [styles.home]: true,
        [styles.active]: currentUrl === link,
      })}
    >
      <Link to={link} className={styles.menuLink}>
        Home
      </Link>
    </li>
  );
}
HomeLink.propTypes = {
  link: PropTypes.string.isRequired,
  currentUrl: PropTypes.string,
};

export function FavoritesLink({ link, currentUrl }) {
  return (
    <li
      className={classnames({
        [styles.menuItem]: true,
        [styles.favorites]: true,
        [styles.active]: currentUrl === link,
      })}
    >
      <Link to={link} className={styles.menuLink}>
        Favorites
      </Link>
    </li>
  );
}
FavoritesLink.propTypes = {
  link: PropTypes.string.isRequired,
  currentUrl: PropTypes.string,
};

export function ImagesLink({ title, link, currentUrl }) {
  return (
    <li
      className={classnames({
        [styles.menuItem]: true,
        [styles.photo]: true,
        [styles.active]: currentUrl === link,
      })}
    >
      <Link to={link} className={styles.menuLink}>
        {title}
      </Link>
    </li>
  );
}
ImagesLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  currentUrl: PropTypes.string,
};
