import { useState, useEffect, useCallback } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Random() {
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState(null); // Store a single drink for display

  const apiBaseUrlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  const fetchDrinkHandler = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(apiBaseUrlRandom);
      const fetchedDrink = response.data.drinks[0]; // Pega o primeiro drink da lista da API.
      setDrink(fetchedDrink);
    } catch (error) {
      console.error('Error fetching drink:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDrinkHandler();
  }, [fetchDrinkHandler]);

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  if (!drink) {
    return <h2>Ocorreu um erro ao buscar o drink.</h2>; // Retorno em caso de erro na busca de drinks.
  }

  return (
    <div className='App'>
      <h2>{drink.strDrink}</h2>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <p>{drink.strInstructions}</p> // Instruções
      <ul>
        {drink.strIngredient1 && (
          <li key={drink.strIngredient1}>
            {drink.strIngredient1} {drink.strMeasure1}
          </li>
        )}
        {/* Loop usando condicional para verificar se há outros ingredientes. */}
        {drink.strIngredient2 && (
          <li key={drink.strIngredient2}>
            {drink.strIngredient2} {drink.strMeasure2}
          </li>
        )}
        {/* ... (loop repete para demais ingredientes) */}
      </ul>
      <button onClick={fetchDrinkHandler}>Buscar outro drink</button>
      <Link to="/">
        <button>Voltar para a Home</button>
        
      </Link>      
    </div>
  );
}

export default Random;
