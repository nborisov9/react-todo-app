import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';

export const Navbar: React.FC = (): React.ReactElement => {
  return (
    <nav className={classes.navbarWrapper}>
      <div className={classes.container}>
        <div className={classes.navbarLogo}>React + TypeScript</div>
        <div className={classes.navbarRoutes}>
          <Link to="/">
            <div className={classes.navbarLinkRouter}>Список дел</div>
          </Link>
          <Link to="/about">
            <div className={classes.navbarLinkRouter}>Информация</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
