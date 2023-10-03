import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom';
import { getData } from '../API/data';

import './Header.css';

const Header = (props) => {
    const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState();
    const [movieList, setMovieList] = useState([]);
    const navigate = useNavigate();

    const onHandlerClickSearch = () => {
        if (searchValue && searchValue.trim().length > 0) {
            getData(searchValue).then((result) => {
                setMovieList(result);
                navigate('/movie');
            })
        } else {
            if (inputRef.current) {
                inputRef.current.classList.toggle('show');
            }
        }
    };    

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
                <div className='search' >
                    <input type="text" ref={inputRef} value={searchValue}
                     onChange={(e) => {setSearchValue(e.target.value)}
                    }/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white' }} size="lg" onClick={onHandlerClickSearch}/>
                </div>
            </nav>
        </div>
    )
}

export default Header;