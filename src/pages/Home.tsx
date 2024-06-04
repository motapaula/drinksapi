import './Home.css';
import '../App.css';
import { SearchForm } from '../components/SearchForm';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';



const Home = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

return (
     <div>
        <h1>Home Page</h1>
        <h1 hidden>{theme}</h1>
        <button onClick={toggleTheme}>Mudar tema</button>
        <ul>
            
            <li>
                <Link to="/random">Random</Link>
            </li>
            
            <li>
                <Link to="/search-results">Pesquise por um drink específico</Link>
            </li>
        </ul>
    </div>
    
    
)
    
}

export default Home;


