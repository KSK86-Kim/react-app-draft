import { lazy } from 'react';

// export const pagesPath = {
//   HomePage: {
//     path: '/',
//     // exact: true,
//     element: lazy(() => import('./pages/HomePage' /* webpackChunkName: "home-page" */)),
//   },
//   UniversityPage: {
//     path: '/university/*',
//     // exact: true,
//     element: lazy(() => import('./pages/UniversityPage' /* webpackChunkName: "university-page" */)),
//   },
//   DefualtPage: {
//     path: '*',
//     // exact: true,
//     element: lazy(() => import('./pages/DefualtPage' /* webpackChunkName: "defualt-page" */)),
//   },
// };

export const HomePage = {
  path: '/',
  // exact: true,
  element: lazy(() => import('./pages/HomePage' /* webpackChunkName: "home-page" */)),
};

export const UniversityPage = {
  path_org: '/university/',
  path: '/university/*',
  // exact: true,
  element: lazy(() => import('./pages/UniversityPage' /* webpackChunkName: "university-page" */)),
};

export const DefualtPage = {
  path: '*',
  // exact: true,
  element: lazy(() => import('./pages/DefualtPage' /* webpackChunkName: "defualt-page" */)),
};
