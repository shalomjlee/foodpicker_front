import React, { Component, Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import Nav from './components/nav/nav';
import NotFound from './components/notFound/notFound';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register'
import 'bootstrap/dist/css/bootstrap.min.css';
import restaurantPrice from './components/restaurantPrice/restaurantPrice';
import restaurantCategory from './components/restaurantCategory/restaurantCategory';
import RandomByCategory from './components/randomRestaurantByCategory/RandomByCategory';
import RandomByPrice from './components/randomRestaurantByPrice/RandomByPrice';





const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userId, setUserId] = useState('');
	const [token, setToken] = useState(null);
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState(null);

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
						exact
						path='/login'
						// component={Login}
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
								<Home loggedin={loggedIn} token={token} setToken={setToken} />
							);
						}}
						component={Register}
					/>
					<Route
						exact
						path='/category'
						component={restaurantCategory}
						// render={(routerProps) => {
						// 	<restaurantCategory
						// 		match={routerProps.match}
						// 		token={token}
						// 		loggedIn={loggedIn}
						// 	/>
						// }}
					/>
					<Route
						exact
						path='/price'
						component={restaurantPrice}
						// render={(routerProps) => {

						// 	return <restaurantPrice
						// 		match={routerProps.match}
						// 		loggedIn={loggedIn}
						// 	/>
						// }
						// }
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
							/>
						)}
					/>
					<Route
						exact
						path='/price/:price'
						render={(routerProps) => (
							<RandomByPrice
								price={price}
								setPrice={setPrice}
								match={routerProps.match}
								token={token}
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