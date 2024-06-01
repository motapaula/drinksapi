import { Outlet, Link } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';


function App() { 

  return (
    <div className='App'>
        <NavBar />
        <Outlet /> 
        <SearchBar />
    </div>
    
      
    
  );
};

export default App;