import React from 'react';
import { Route, Routes } from 'react-router';
import { HomePage, CartPage, LoginPage, NoMatchPage } from 'src/pages';

export const App = () => (
  <Routes>
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
    <Route path="*" element={<NoMatchPage />} />
  </Routes>
);
