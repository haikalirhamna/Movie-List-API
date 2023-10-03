import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="brand">
                <h1><span>Movie</span>List</h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="active">New Movie</NavLink></li>
                    <li><NavLink to="/genre" activeClassName="active">Genre</NavLink></li>
                    <li><NavLink to="/movie" activeClassName="active">Movie</NavLink></li>
                    <li><NavLink to="/tv-series" activeClassName="active">TV Series</NavLink></li>
                </ul>
                <div className='search'>
                    <input type="text" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white' }} size="lg" />
                </div>
            </nav>
        </div>
    )
}

export default Header;