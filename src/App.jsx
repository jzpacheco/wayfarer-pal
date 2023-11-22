// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Login from './routes/Login.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import HomeScreen from './routes/Home.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element: <RootLayout />,
  children:[
    {
      path: "/",
      element: <HomeScreen />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]
  }
])

const App = () => {
  return (
    <div >
      <RouterProvider router={ router} />
    </div>
  );
};

export default App;
