import { Link } from 'react-router-dom';
import '../App.css';


const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
           
            <li>
                <Link to="/about">About us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar