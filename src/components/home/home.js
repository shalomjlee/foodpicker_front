import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ loggedIn }) => {
	return (
		<div>
			<h1>The Food Picker App</h1>
			<h4>{!loggedIn && <Link to='/register'>Register</Link>}</h4>
			<h4>{!loggedIn && <Link to='/login'>Log in</Link>}</h4>
			<h4>{loggedIn && <Link to='/category'>Select by category</Link>}</h4>
			<h4>{loggedIn && <Link to='/price'>Select by price</Link>}</h4>
		</div>
	);
};

export default Home;
