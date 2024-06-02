import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import '../App.css';

export function SearchBar() {
// visualizar e alterar o valor na barra de busca

    const [value, setValue] = useState([]);
    const handleChange = (event) => {
    setValue(event.target.value)
};
// console.log(value) mostra o resultado da busca no Console
    console.log(value)

        return (
        <div className='searchbar-container'>
            <form action="">
                <input type="text" placeholder='Find your favorite drink' onChange={handleChange} /> <FaSearch />
                <button type="submit">Search</button>
            </form>

        {value}
    </div>
    );

};

export default SearchBar;