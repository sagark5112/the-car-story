import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ServiceHistory from './components/ServiceHistory';
import Feedbacks from './components/Feedbacks';
import AddServiceHistory from './components/AddServiceHistory';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
    children: [
      {
        path: "/Home",
        element: <Dashboard />
      },
      {
        path: "/Home/Service-history",
        element: <ServiceHistory />
      },
      {
        path: "/Home/Feedbacks",
        element: <Feedbacks />
      },
      {
        path: "/Home/AddNewServiceHistory",
        element: <AddServiceHistory />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
