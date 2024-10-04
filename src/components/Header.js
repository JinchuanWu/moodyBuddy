import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you are using react-router for navigation
import '../index.css';
import { set } from 'firebase/database';

export function Header (props) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
             <nav id="navBar">
                {/* <Link className="navButtonSmall" to="/">Home</Link> */}
                <img src="../img/title.png" alt="MoodyBuddy Title" />
                <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink className="navButtonSmall" to="/PageHome">Daily Check-in</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButtonSmall" to="/YourPuppy">Your Puppy</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButtonSmall" to="/MoodLog">Mood Log</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButtonSmall" to="/PagePuppyCards">Puppy List</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButtonSmall" to="/PageLogin">Log In</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}