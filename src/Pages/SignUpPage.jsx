import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth } from '../firebase';

import styles from './SignUpPage.module.scss';
import { LOGIN } from '../store/authSlice';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => {
            dispatch(LOGIN({ authUserEmail: email, authUserName: name }));
            navigate('/');
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={styles.signup}>
      <div className={styles.signup__logo}>
        <Link to="/" className={styles.signup__logo__sprite}>
          <span className={styles.signup__logo__sprite__base} />
          <span className={styles.signup__logo__sprite__locale}>.in</span>
        </Link>
      </div>

      <div className={styles.signup__signup}>
        <h2>Create account</h2>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name="name"
          id="name"
          className={styles.signup__signup__email}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.signup__signup__email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles.signup__signup__password}
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span>
          <span className={styles.signup__signup__password__icon} />
          Passwords must be at least 6 characters.
        </span>
        <label htmlFor="password__again">Password again</label>
        <input type="password" name="password__again" id="password__again" required />
        <button type="submit" onClick={(e) => handleSignUp(e)}>
          Continue
        </button>
        <p>
          By creating an account or logging in, you agree to Amazon&apos;s <Link to="/">Conditions of Use </Link> and{' '}
          <Link to="/">Privacy Notice</Link>.
        </p>

        <div className={styles.signup__break} />

        <p>
          Already have an account? <Link to="/login">Sign in </Link>
        </p>
      </div>

      <div className={styles.signup__footer}>
        <div className={styles.signup__footer__links}>
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

        <div className={styles.signup__footer__rights}>© 1996-2022, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  );
};

export { SignUpPage };
