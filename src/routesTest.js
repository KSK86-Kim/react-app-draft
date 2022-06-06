// import { lazy } from "react";

// const routes = [
//   {
//     path: "/",
//     // exact: true,
//     element: lazy(() =>
//       import("./pages/Home" /* webpackChunkName: "Home2-page" */)
//     ),
//   },
//   {
//     path: "/about",
//     // exact: true,
//     element: lazy(() =>
//       import("./pages/About" /* webpackChunkName: "About-page" */)
//     ),
//   },
// ];

// export default routes;

///////////////////////////

import { lazy } from 'react';

// const routes = {
//   Home: {
//     path: '/',
//     // exact: true,
//     element: lazy(() =>
//       import('./pages/Home' /* webpackChunkName: "Home2-page" */)
//     ),
//   },
//   About: {
//     path: '/about',
//     // exact: true,
//     element: lazy(() =>
//       import('./pages/HomePage' /* webpackChunkName: "About-page" */)
//     ),
//   },
// };

const routes = {
  Home: {
    path: '/',
    // exact: true,
    element: lazy(() =>
      import('./pages/HomePage' /* webpackChunkName: "home-page" */)
    ),
  },
  About: {
    path: '/',
    // exact: true,
    element: lazy(() =>
      import('./pages/UniversityPage' /* webpackChunkName: "university-page" */)
    ),
  },
  //   DefualtPage: {
  //     path: '/',
  //     // exact: true,
  //     element: lazy(() => {
  //       import('../pages/DefualtPage' /* webpackChunkName: "defualt-page" */);
  //     }),
  //   },
};

export default routes;
