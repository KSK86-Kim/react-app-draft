import React from 'react';
import s from './Platform.module.scss';

const Platform = ({ children, mt, mb }) => {
  return (
    <article className={s.section} style={{ marginTop: `${mt}`, marginBottom: `${mb}` }}>
      {children}
    </article>
  );
};

export default Platform;
