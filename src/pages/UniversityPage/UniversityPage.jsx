import { Route, Routes, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

import { CategoriaA, CategoriaB, CategoriaC, CategoriaD } from './SectionPages/routes';

import Container from '../../components/Container';
import NavUniversity from '../../components/navUniversity';

import s from './UniversityPage.module.scss';
import css from '../../styles/visually-hidden.module.scss';

const UniversityPage = () => {
  return (
    <>
      <article className={s.exam__article}>
        <h2 className={css.visually_hidden}>Exam</h2>
        <Container>
          <NavUniversity />
        </Container>
        <section>
          <Container>
            <Suspense fallback={<>...</>}>
              <Routes>
                <Route path={CategoriaA.path} element={<CategoriaA.element />} />
                <Route path={CategoriaB.path} element={<CategoriaB.element />} />
                <Route path={CategoriaC.path} element={<CategoriaC.element />} />
                <Route path={CategoriaD.path} element={<CategoriaD.element />} />
              </Routes>
            </Suspense>
          </Container>
        </section>
      </article>
    </>
  );
};

export default UniversityPage;
