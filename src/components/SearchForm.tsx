import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import '../App.css';

export function SearchForm() {
    // Visualizar e alterar o valor na barra de busca
    const [search, setSearch] = useState("");
    const [drinks, setDrinks] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (event) => { 
        setSearch(event.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validação do campo de busca
        if (!search) {
            setError("Por favor, insira um termo de busca.");
            return;
        }

        // Buscar drinks com base no termo de busca
        fetchDrinks(search);
        navigate(`/search-results?q=${search}`);
        setSearch("");
        setError(null); // Limpar mensagem de erro ao submeter
    };

    const fetchDrinks = async (query) => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            const data = await response.json();
            if (data.drinks) {
                setDrinks(data.drinks);
                setError(null); // Limpar mensagem de erro ao obter sucesso
            } else {
                setError("Nenhum drink encontrado.");
                setDrinks([]); // Limpar drinks anteriores
            }
        } catch (error) {
            setError(error.message);
            setDrinks([]); // Limpar drinks anteriores
        }
    };

    const handleClear = () => {
        setSearch("");
        setDrinks([]);
        setError(null);
    };

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className='searchform-container'>
            <form action="submit" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Encontre seu drink favorito' 
                    onChange={handleChange}
                    value={search}
                /> 
                <button type="submit">Buscar <FaSearch /></button>
                <button type="button" onClick={handleClear}>Limpar</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            <div className='results-container'>
                {!error && drinks.length > 0 ? (
                    <ul>
                        {drinks.map(drink => (
                            <li key={drink.idDrink}>
                                <h3>{drink.strDrink}</h3>
                                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                                <p>Recipiente: {drink.strGlass}</p>
                                <p>Instruções: {drink.strInstructions}</p>
                                <div className='ingredient-list'>
                                    <p>Ingredientes:</p>
                                    <ul> 
                                        {/* Loop usando condicional para verificar se há outros ingredientes. */}
                                        {drink.strIngredient1 && (<li key={drink.strIngredient1}> {drink.strIngredient1} {drink.strMeasure1}</li>)}
                                        {drink.strIngredient2 && (<li key={drink.strIngredient2}> {drink.strIngredient2} {drink.strMeasure2}</li>)}
                                        {drink.strIngredient3 && (<li key={drink.strIngredient3}> {drink.strIngredient3} {drink.strMeasure3}</li>)}
                                        {drink.strIngredient4 && (<li key={drink.strIngredient4}> {drink.strIngredient4} {drink.strMeasure4}</li>)}
                                        {drink.strIngredient5 && (<li key={drink.strIngredient5}> {drink.strIngredient5} {drink.strMeasure5}</li>)}
                                        {drink.strIngredient6 && (<li key={drink.strIngredient6}> {drink.strIngredient6} {drink.strMeasure6}</li>)}
                                        {drink.strIngredient7 && (<li key={drink.strIngredient7}> {drink.strIngredient7} {drink.strMeasure7}</li>)}
                                        {drink.strIngredient8 && (<li key={drink.strIngredient8}> {drink.strIngredient8} {drink.strMeasure8}</li>)}
                                        {drink.strIngredient9 && (<li key={drink.strIngredient9}> {drink.strIngredient9} {drink.strMeasure9}</li>)}
                                        {drink.strIngredient10 && (<li key={drink.strIngredient10}> {drink.strIngredient10} {drink.strMeasure10}</li>)}
                                        {/* ... (loop repete para demais ingredientes) */}
                                    </ul>
                                </div>
                            </li>
                            
                        ))}
                    </ul>
                    
                ) : (
                    !error && drinks.length === 0 && <p>Pesquise por um drink para ver os resultados.</p>
                )}
                
            </div>
            <button type="button" onClick={goHome}>Home</button>
            
            
        </div>
        
    );
}

export default SearchForm;
