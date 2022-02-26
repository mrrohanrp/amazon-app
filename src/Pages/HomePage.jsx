import React from 'react';

import { Carousel, Product } from 'src/components';
import { slideData, productData } from 'src/data';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Carousel slides={slideData} />

      <div className={styles.home__container}>
        <div className={styles.home__products}>
          {productData.map((data) => {
            return <Product {...data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { HomePage };
