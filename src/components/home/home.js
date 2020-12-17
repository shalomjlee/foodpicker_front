import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route, Redirect } from 'react-router-dom';
import restaurantPrice from '../restaurantPrice/restaurantPrice';
import restaurantCategory from '../restaurantCategory/restaurantCategory';
// if not signed up, should show button that says sign up here
//if signed up, should display pick by category and pick by price
//once clicked, button should select one restaurant by category or by price

const Home = ({ loggedIn, token, setToken }) => {
	

	
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
