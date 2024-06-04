import { Link } from 'react-router-dom';

const apiBaseUrl_Search = ('https://www.thecocktaildb.com/api/json/v1/1/search.php');

const DrinkCard = ({singleDrink, showLink = true}) => {
  return (
    <div className='drink-card'>
        DrinkCard
        <img src={apiBaseUrl_Search + singleDrink.strDrinkThumb} alt={singleDrink.strDrink}/>
        <h2>
            {singleDrink.strDrink}
        </h2>
        <p>
            Recipiente: {singleDrink.strGlass}
        </p>
        <p>
            Instruções: {singleDrink.strInstructions}
        </p>
        <p>
            Ingredientes:                      
        </p>
        <div className='ingredient-list'>
            <ul> 
                {/* Loop usando condicional para verificar se há outros ingredientes. */}
                {singleDrink.strIngredient1 && (<li key={singleDrink.strIngredient1}> {singleDrink.strIngredient1} {singleDrink.strMeasure1}</li>)}
                {singleDrink.strIngredient2 && (<li key={singleDrink.strIngredient2}> {singleDrink.strIngredient2} {singleDrink.strMeasure2}</li>)}
                {singleDrink.strIngredient3 && (<li key={singleDrink.strIngredient3}> {singleDrink.strIngredient3} {singleDrink.strMeasure3}</li>)}
                {singleDrink.strIngredient4 && (<li key={singleDrink.strIngredient4}> {singleDrink.strIngredient4} {singleDrink.strMeasure4}</li>)}
                {singleDrink.strIngredient5 && (<li key={singleDrink.strIngredient5}> {singleDrink.strIngredient5} {singleDrink.strMeasure5}</li>)}
                {singleDrink.strIngredient6 && (<li key={singleDrink.strIngredient6}> {singleDrink.strIngredient6} {singleDrink.strMeasure6}</li>)}
                {singleDrink.strIngredient7 && (<li key={singleDrink.strIngredient7}> {singleDrink.strIngredient7} {singleDrink.strMeasure7}</li>)}
                {singleDrink.strIngredient8 && (<li key={singleDrink.strIngredient8}> {singleDrink.strIngredient8} {singleDrink.strMeasure8}</li>)}
                {singleDrink.strIngredient9 && (<li key={singleDrink.strIngredient9}> {singleDrink.strIngredient9} {singleDrink.strMeasure9}</li>)}
                {singleDrink.strIngredient10 && (<li key={singleDrink.strIngredient10}> {singleDrink.strIngredient10} {singleDrink.strMeasure10}</li>)}
                               
                {/* ... (loop repete para demais ingredientes) */}
            </ul>
            
        </div>
        {showLink && <Link to={`/`}>Voltar</Link>}
        



    </div>
  )
};

export default DrinkCard;