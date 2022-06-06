import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { HomePage, UniversityPage, DefualtPage } from './routes';

import Layout from './components/Layout';

import PravoPege from './pages/testPage/pravoPege.jsx';

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
          {/* <Route path="/test" element={<h1>Ghbdtdtn</h1>}></Route> */}
          <Route path="/test/pravo" element={<PravoPege />} />
        </Routes>
      </Suspense>
    </>
  );
}
