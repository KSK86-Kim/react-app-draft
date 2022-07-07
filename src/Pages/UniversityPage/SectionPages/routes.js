import { lazy } from 'react';

export const CategoriaA = {
  path: 'categoriaA',
  // exact: true,
  element: lazy(() => import('./CategoriaA/CategoriaA.jsx' /* webpackChunkName: "CategoriaA" */)),
};

export const CategoriaB = {
  path: 'categoriaB',
  // exact: true,
  element: lazy(() => import('./CategoriaB/CategoriaB.jsx' /* webpackChunkName: "CategoriaB" */)),
};

export const CategoriaC = {
  path: 'categoriaC',
  // exact: true,
  element: lazy(() => import('./CategoriaC/CategoriaC.jsx' /* webpackChunkName: "CategoriaC" */)),
};
