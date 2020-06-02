import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppLayout.module.scss';
import AppSidebar from './AppSidebar';
import * as classnames from 'classnames';

function AppLayout({ menu, page }) {
  return (
    <div className={styles.rootContent}>
      <div className={styles.sidebar}>
        <AppSidebar menu={menu} />
      </div>
      <main className={classnames(styles.page, styles.pageContent)}>
        {page}
      </main>
    </div>
  );
}

AppLayout.propTypes = {
  menu: PropTypes.element.isRequired,
  page: PropTypes.element.isRequired,
};

export default AppLayout;
