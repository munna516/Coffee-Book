import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Coffee from './Components/Coffee/Coffee.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Home from './Components/Home.jsx/Home.jsx';
import CoffeeCards from './Components/Coffee Cards/CoffeeCards.jsx';
import CardDetails from './Components/Card Details/CardDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: '/',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('/coffees.json')
          },
          {
            path: '/category/:category',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('/coffees.json')
          }
        ]
      },
      {
        path: '/allcoffees',
        element: <Coffee></Coffee>,
        loader: () => fetch('/coffees.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/coffee/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/coffees.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
