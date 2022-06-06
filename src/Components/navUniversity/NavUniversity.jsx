import React from 'react';
import { UniversityLink } from '../../components/CustomLink';
import {
  CategoriaA,
  CategoriaB,
  CategoriaC,
  CategoriaD,
} from '../../pages/UniversityPage/SectionPages/routes';

import s from './NavUniversity.module.scss';

const NavUniversity = () => {
  return (
    <div className={s.exam__nav}>
      <ul className={s.exam__list}>
        <UniversityLink to={CategoriaA.path}>CategoriaA</UniversityLink>

        <UniversityLink to={CategoriaB.path}>CategoriaB</UniversityLink>

        <UniversityLink to={CategoriaC.path}>CategoriaC</UniversityLink>

        <UniversityLink to={CategoriaD.path}>CategoriaD</UniversityLink>
      </ul>
    </div>
  );
};

export default NavUniversity;
