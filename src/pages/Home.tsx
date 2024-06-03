import '../App.css';
import SearchBar from '../components/SearchBar';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Random from './Random';

const apiBaseUrl_Search = ('https://www.thecocktaildb.com/api/json/v1/1/search.php');
const apiBaseUrl_Random = ('https://www.thecocktaildb.com/api/json/v1/1/random.php');

const Home = () => {
  const [searchTerms, setSearchTerms] = useState([])

  //Uso de função assíncrona para esperar o resultado da url.

  const getSearchResult = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
  };

//useEffect executado depois da dependência da função (?)
  useEffect(() => {

    const getRandomResult = (apiBaseUrl_Random);

    console.log(getRandomResult);

  }, []);

return (
    <div>
        <h1>Home Page</h1>


    </div>
)
    
}

export default Home;


