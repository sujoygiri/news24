import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [onClick, setOnClick] = useState(false);
    const handelClick = () =>{
        if(onClick){
            setOnClick(false);
        }
        else{
            setOnClick(true);
        }
    }
    
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={require('../Assets/world-news.png')} alt="logo" />
                        <span className="site-name">News24</span>
                    </Link>
                </div>
                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button onFocus={handelClick} onBlur={handelClick}>Catagories</button>
                                <div className={`dropdown-content ${onClick ? 'open-menu' : 'close-menu'}`} onClick={handelClick}>
                                    <Link className='menu-link' to="/general">General</Link>
                                    <Link className='menu-link' to="/technology">Technology</Link>
                                    <Link className='menu-link' to="/health">Health</Link>
                                    <Link className='menu-link' to="/sports">Sports</Link>
                                    <Link className='menu-link' to="/science">Science</Link>
                                    <Link className='menu-link' to="/business">Business</Link>
                                    <Link className='menu-link' to="/entertainment">Entertainment</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className="link" to="/">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;