import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Random from './pages/Random.tsx';
import SearchResults from './pages/SearchResults.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/search-results", element: <SearchResults />},
      {path: "/random", element: <Random />},
      {path: "/about", element: <About />},
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
