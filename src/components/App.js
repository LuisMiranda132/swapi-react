import React  from 'react';
import { useRoutes } from 'react-router-dom';

import Details from './Details';
import Dashboard from './Dashboard';
import MainLayout from './MainLayout';

import './App.scss'

const routes = [{
  path: '/',
  element: <MainLayout />,
  children: [
      {
          path: '/',
          element: <Dashboard />
      },
      {
          path: '/details/:id',
          element: <Details />
      }      
  ]
}];

function App() {

  let layout = useRoutes(routes);

  return (
    <>
    {layout}
    </>
  )
}

export default App;
