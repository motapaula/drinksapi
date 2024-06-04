import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

// Estrutura das páginas
import Home from './pages/Home.tsx';
import About from './pages/AboutPage.tsx';
import Random from './pages/Random.tsx';
import SearchResults from './pages/SearchResults.tsx';
import DrinkCard from './components/DrinkCard.tsx';
import Context from './components/Context.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/search-results", element: <SearchResults />},
      {path: "/random", element: <Random />},
      {path: "/about", element: <AboutPage />},
    ],
  },
]);


import { ThemeProvider } from './context/ThemeContext.tsx';
import AboutPage from './pages/AboutPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
