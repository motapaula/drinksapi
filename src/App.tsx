import { Outlet, Link } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import { SearchForm } from './components/SearchForm';
import Footer from './components/Footer';
import Random from './pages/Random';
import Home from './pages/Home';


function App() { 

  return (
    <div className='App'>
        <NavBar />
        <h1>Bons Drink</h1>
        {/*<Home />*/}

        <Outlet />
        {/* <Random /> */}

        <Footer />

    </div>
  );
};

export default App;