import React from 'react';
import testSVG from '../../svg/pravo.svg';
import s from './HomePage.scss';
import Container from '../../components/Container';

const HomePage = ({ text = 'home' }) => {
  return (
    <div>
      <h1>This home page</h1>
      <p>props test: {text}</p>
      <img src={testSVG} className={s.svg} alt="" />;
    </div>
  );
};

export default HomePage;
