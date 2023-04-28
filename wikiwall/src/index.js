import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider
} from "react-router-dom";
import './index.css';
import Root from './Root';
import HomePage from './core/pages/home/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'/',
        element: <HomePage/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

