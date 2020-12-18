import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

const RandomByPrice = ({match, token, priced, setPriced, restaurant, setRestaurant }) => {
	useEffect(() => {
		const restaurantURL = `http://localhost:8000/api/price/${match.params.price}`;
        fetch(restaurantURL,
            {
			headers: {
				Authorization: `Bearer ${token}`,
			},
        }
        )
			.then((res) => res.json())
			.then((res) => {
				setRestaurant(res);
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!restaurant) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Here is your {match.params.price} $ Restaurant</h1>
			<h4>Name: {restaurant[0]?.name}</h4> 
			<h4>Category: {restaurant[0]?.category}</h4>
			<h4>Price range (1-4): {restaurant[0]?.price}</h4>
			<h4>Address: {restaurant[0]?.address}</h4> 
            <p><Link to="/price"> Go Back </Link></p>
            <p><Link to="/">Home</Link></p>
		</div>
	);
};

export default RandomByPrice;
