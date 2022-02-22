import React from 'react';
import { Header } from 'src/components';

import style from './HomePage.module.scss';

const abc = () => {
  return (
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam accusantium illum ipsum est natus iusto error
      similique, officiis molestiae nesciunt dignissimos, possimus minus distinctio voluptates dolorum, at corporis
      eaque. Autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam accusantium illum ipsum est natus
      iusto error similique, officiis molestiae nesciunt dignissimos, possimus minus distinctio voluptates dolorum, at
      corporis eaque. Autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam accusantium illum ipsum est
      natus iusto error similique, officiis molestiae nesciunt dignissimos, possimus minus distinctio voluptates
      dolorum, at corporis eaque. Autem?
    </h1>
  );
};

const HomePage = () => {
  return (
    <div className={style.container}>
      <Header />
      HOMPAGE
      {abc()}
      {abc()}
      {abc()}
      {abc()}
      {abc()}
      {abc()}
      {abc()}
      {abc()}
      {abc()}
      {abc()}
      {abc()}
    </div>
  );
};

export { HomePage };
