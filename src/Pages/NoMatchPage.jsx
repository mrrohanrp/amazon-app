import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../components';

import styles from './NoMatchPage.module.scss';

const NoMatchPage = () => {
  return (
    <div className={styles.nomatch}>
      <Logo />

      <div className={styles.nomatch__container}>
        <img />
        <div className={styles.nomatch__content}>
          <h1>Looking for something?</h1>
          <p>We&apos;re sorry. The Web address you entered is not a functioning page on our site.</p>
          <div className={styles.nomatch__content__end}>
            <img />
            <h2>
              Go to Amazon.in&apos;s <Link to="/">Home</Link> Page
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NoMatchPage };
