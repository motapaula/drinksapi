import '../App.css';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'; //Permite pegar a query string da URL para utilizá-la na consulta à API.
import DrinkCard from '../components/DrinkCard';
import SearchForm from '../components/SearchForm';

const apiBaseUrl_Search = ('https://www.thecocktaildb.com/api/json/v1/1/search.php');

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState([])
  const searchTerms = searchParams.get("q");

  /* const {searchResult} = useParams()
  const [drink, setDrink] = useState(null);

  const getDrink = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setDrink(data);
  }

  useEffect(() => {
    const apiUrlSearch = `${apiBaseUrl_Search}?s=${searchParams}`
    getDrink(apiUrlSearch)
  }, [])
 */


  return (
    <div>
        <h2>Você buscou por: <span className='search-text'>{searchTerms}</span></h2>
        <SearchForm />

        
    </div>
  )
}

export default SearchResults;