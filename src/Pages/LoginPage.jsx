import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__logo}>
        <Link to="/" className={styles.login__logo__sprite}>
          <span className={styles.login__logo__sprite__base} />
          <span className={styles.login__logo__sprite__locale}>.in</span>
        </Link>
      </div>

      <div className={styles.login__login}>
        <h2>Sign-In</h2>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required className={styles.login__login__email} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required className={styles.login__login__password} />
        <button type="submit">Continue</button>
        <p>
          By continuing, you agree to Amazon&apos;s <Link to="/">Conditions of Use </Link> and{' '}
          <Link to="/">Privacy Notice</Link>.
        </p>

        <Link to="/">
          <p>
            <span className={styles.login__login__icon} />
            Need Help?
          </p>
        </Link>
      </div>

      <div className={styles.login__break}>
        <p>New to Amazon?</p>
      </div>

      <Link to="/signup">
        <button className={styles.login__create__account}>Create your Amazon account</button>
      </Link>

      <div className={styles.login__footer}>
        <div className={styles.login__footer__links}>
          <Link to="/">
            <p>Condition of Use</p>
          </Link>
          <Link to="/">
            <p>Privacy Notice</p>
          </Link>
          <Link to="/">
            <p>Help</p>
          </Link>
        </div>

        <div className={styles.login__footer__rights}>© 1996-2022, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  );
};

export { LoginPage };
