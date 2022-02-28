import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';

import { auth } from './firebase';
import { LOGIN, LOGOUT } from 'src/store/authSlice';
import { HomePage, CartPage, LoginPage, SignUpPage, NoMatchPage } from 'src/pages';
import { Header } from './components';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, displayName } = user;
        dispatch(LOGIN({ authUserEmail: email, authUserName: displayName }));
      } else {
        dispatch(LOGOUT());
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route
          path="cart"
          element={
            <>
              <Header />
              <CartPage />
            </>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
};
