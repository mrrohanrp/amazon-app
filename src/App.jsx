import React from 'react';
import { Route, Routes } from 'react-router';
import { HomePage, CartPage, LoginPage, SignUpPage, NoMatchPage } from 'src/pages';
import { Header } from './components';

export const App = () => (
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
