import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.logo__sprite}>
        <span className={styles.logo__sprite__base} />
        <span className={styles.logo__sprite__locale}>.in</span>
      </Link>
    </div>
  );
};

export { Logo };
