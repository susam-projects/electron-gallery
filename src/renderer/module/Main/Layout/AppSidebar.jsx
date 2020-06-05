import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AppSidebar.module.scss';
import logo from './logo.png';

function AppSidebar({ className, menu }) {
  return (
    <div
      className={classnames(styles.sidebar, styles.sidebarContent, className)}
    >
      <div className={styles.logo}>
        <a href="/">
          <img className={styles.logoContent} src={logo} alt="React Gallery" />
        </a>
      </div>
      <div className={styles.menu}>{menu}</div>
      <div className={classnames(styles.footer, styles.footerContent)}>
        <p>
          © 2020 Susam Gallery. All Rights Reserved | Design by{' '}
          <a href="http://w3layouts.com">W3Layouts</a>
        </p>
      </div>
    </div>
  );
}

AppSidebar.propTypes = {
  // prettier-ignore
  menu: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
};

export default AppSidebar;
