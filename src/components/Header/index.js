import React from 'react';
import Ireland from './images/ireland.jpg';
import './styles.css';

function Header() {
	return (
		<header>
			<img className="logo" src={Ireland} alt="Cliffs of Moher" />
			<h1>Welcome to my cool React site!</h1>
			<nav>
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
		</header>
	);
}

export default Header;