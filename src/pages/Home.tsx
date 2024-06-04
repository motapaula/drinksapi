import '../App.css';
import { SearchForm } from '../components/SearchForm';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';



const Home = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

/*   const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Drink[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchURL = `${apiBaseUrl_Search}?s=${searchTerm}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.drinks) {
          setSearchResults(data.drinks);
        } else {
          setSearchResults([]);
        }
      });
  };
   */

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


