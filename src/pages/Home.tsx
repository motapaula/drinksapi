import '../App.css';
import './Home.css';
import { SearchForm } from '../components/SearchForm';
import { Link } from 'react-router-dom';



const Home = () => {

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


