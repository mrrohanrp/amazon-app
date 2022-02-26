import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);

  const [headerHeight, setHeaderHeight] = useState('auto');

  const headerRef = useRef();

  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  return (
    <div className="header">
      <div className="header__container" ref={ref} style={{ height: headerHeight }}>
        <nav className={classNames('header__main', { nav__fixed: !inView })} ref={headerRef}>
          <div className="header__main__logo">
            <Link to="/" className="header__main__logo__sprite">
              <span className="header__main__logo__sprite__base" />
              <span className="header__main__logo__sprite__ext" />
              <span className="header__main__logo__sprite__locale">.in</span>
            </Link>
          </div>
          <div className="header__main__search">
            <div className="header__main__search__bar">
              <select className="header__main__search__bar__drop">
                <option value="search_all-categories">All</option>
                <option value="search_todays-deals">Deals</option>
                <option value="search_fashion">Fashion</option>
                <option value="search_pantry">Pantry</option>
                <option value="search_appliances">Appliances</option>
                <option value="search_mobile-apps">Apps</option>
                <option value="search_baby">Baby</option>
                <option value="search_beauty">Beauty</option>
                <option value="search_books">Books</option>
                <option value="search_automotive">Motorbikes</option>
                <option value="search_apparel">Clothing</option>
                <option value="search_collectibles">Collectibles</option>
                <option value="search_computers">Computers</option>
                <option value="search_electronics">Electronics</option>
                <option value="search_furnitures">Furnitures</option>
              </select>
              <input type="text" className="header__main__search__bar__input" />
              <span className="header__main__search__bar__icon"></span>
            </div>
          </div>
          <div className="header__main__nav">
            <Link to="/login" className="header__main__nav__options">
              <span className="header__main__nav__options__top">Hello, Rohan</span>
              <span className="header__main__nav__options__bottom">Account & Lists</span>
            </Link>
            <Link to="/" className="header__main__nav__options">
              <span className="header__main__nav__options__top">Returns </span>
              <span className="header__main__nav__options__bottom">& Orders</span>
            </Link>
            <Link to="/cart" className="header__main__nav__options header__main__nav__cart">
              <span className="header__main__nav__cart__count">{cartCount}</span>
              <span className="header__main__nav__cart__icon" />
              <span className="header__main__nav__cart__text">Cart</span>
            </Link>
          </div>
        </nav>
      </div>

      <nav className="header__sub">
        <div className="header__sub__drop">
          <span className="header__sub__drop__burger" />
          <span className="header__sub__drop__burgerlabel">All</span>
        </div>

        <div className="header__sub__items">
          <Link to="/">
            <span>Fresh</span>
          </Link>
        </div>

        <div className="header__sub__items">
          <Link to="/">
            <span>Best Sellers</span>
          </Link>
        </div>

        <div className="header__sub__items">
          <Link to="/">
            <span>Fashion</span>
          </Link>
        </div>

        <div className="header__sub__items">
          <Link to="/">
            <span>Mobile</span>
          </Link>
        </div>

        <div className="header__sub__items">
          <Link to="/">
            <span>Amazon Pay</span>
          </Link>
        </div>

        <div className="header__sub__ads" />
      </nav>
    </div>
  );
};

export { Header };
