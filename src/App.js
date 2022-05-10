import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { HomePage, UniversityPage, DefualtPage } from './routes';

import Layout from './components/Layout';

export default function App() {
  return (
    <>
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path={HomePage.path} element={<Layout />}>
            <Route index element={<HomePage.element text="qwe" />} />
            <Route path={UniversityPage.path} element={<UniversityPage.element />} />
            <Route path={DefualtPage.path} element={<DefualtPage.element />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
