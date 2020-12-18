import React, { Component, Fragment, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Nav from './components/nav/nav';
import NotFound from './components/notFound/notFound';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantPrice from './components/restaurantPrice/restaurantPrice';
import RestaurantCategory from './components/restaurantCategory/restaurantCategory';
import RandomByCategory from './components/randomRestaurantByCategory/RandomByCategory';
import RandomByPrice from './components/randomRestaurantByPrice/RandomByPrice';
import ChangePassword from './components/changePassword/changePassword';

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userId, setUserId] = useState('');
	const [token, setToken] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState(null);
	const [restaurant, setRestaurant] = useState([]);
	return (
		<div>
			<header>
				<Nav
					loggedIn={loggedIn}
					setToken={setToken}
					setLoggedIn={setLoggedIn}
				/>
			</header>
			<main>
				<Switch>
					<Route
						exact
						path='/'
						render={() => {
							return (
								<Home
									loggedIn={loggedIn}
									setLoggedIn={setLoggedIn}
									token={token}
									setToken={setToken}
								/>
							);
						}}
					/>
					<Route
					exact path='/changePassword'
					component={ChangePassword}
					/>
					<Route
						exact
						path='/login'
						render={() => {
							return (
								<Login
									loggedIn={loggedIn}
									setLoggedIn={setLoggedIn}
									userId={userId}
									setUserId={setUserId}
									token={token}
									setToken={setToken}
								/>
							);
						}}
					/>
					<Route
						path='/register'
						render={() => {
							return (
								<Register
									loggedin={loggedIn}
									setLoggedIn={setLoggedIn}
									token={token}
									setToken={setToken}
									setUserId={setUserId}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/category'
						render={(routerProps) => {
							return (
								<RestaurantCategory
									match={routerProps.match}
									token={token}
									loggedIn={loggedIn}
									setRestaurantCategory={setCategory}
									restaurantCategory={category}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/price'
						component={RestaurantPrice}
						render={(routerProps) => {
							return (
								<RestaurantPrice
									match={routerProps.match}
									loggedIn={loggedIn}
									restaurantPrice={price}
									setRestaurantPrice={setPrice}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/category/:category'
						render={(routerProps) => (
							<RandomByCategory
								category={category}
								setCategory={setCategory}
								match={routerProps.match}
								token={token}
								restaurant={restaurant}
								setRestaurant={setRestaurant}
							/>
						)}
					/>
					<Route
						exact
						path='/price/:price'
						render={(routerProps) => (
							<RandomByPrice
								priced={price}
								setPriced={setPrice}
								match={routerProps.match}
								token={token}
								restaurant={restaurant}
								setRestaurant={setRestaurant}
							/>
						)}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
			<footer>
				<div>
					<p>&copy; 2020 Shalom Lee</p>
				</div>
			</footer>
		</div>
	);
};

export default App;
