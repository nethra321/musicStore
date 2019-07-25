import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.scss'

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Music Store</h3>
            <ul className="nav-links">

                <Link style={navStyle} to="/AddSong">
                    <li>AddSong</li>
                </Link>
                <Link style={navStyle} to="/">
                    <li>SongList</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
