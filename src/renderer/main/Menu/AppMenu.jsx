import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppMenu.module.scss';

function AppMenu({ children }) {
  return <ol className={styles.filters}>{children}</ol>;
}

AppMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export function AppMenuItem({ children }) {
  return <li>{children}</li>;
}

AppMenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default AppMenu;
