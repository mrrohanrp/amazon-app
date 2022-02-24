import React from 'react';
import { Header, Carousel } from 'src/components';
import { slidesData } from '../utils/slideData';

import style from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={style.home}>
      <Header />
      <Carousel slides={slidesData} />
    </div>
  );
};

export { HomePage };
