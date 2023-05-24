import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './index.css';
import Root from './Root';
import HomePage from './core/pages/home/HomePage';
import './core/css/variables.css'
import './core/css/fonts.css'
import TopicPage from './core/pages/topic/TopicPage';
import ErrorPage from './core/pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cars",
        element: <TopicPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

