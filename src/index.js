import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Calculator from './components/Calculator';
import './index.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Quote from './pages/Quote';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'calculator',
        element: <Calculator />
      },
      {
        path: 'quotes',
        element: <Quote />
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

