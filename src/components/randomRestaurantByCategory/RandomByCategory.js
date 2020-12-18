import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
const RandomByCategory = ({match, token, category, setCategory, restaurant, setRestaurant}) => {
    useEffect(() => {
		const restaurantURL = `http://localhost:8000/api/category/${match.params.category}`;
		fetch(restaurantURL, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
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
	} else {
        return (
					<div>
						<h1>Here is your {match.params.category} Restaurant</h1>
						<h4>Name: {restaurant[0]?.name}</h4>
						<h4>Category: {restaurant[0]?.category}</h4>
						<h4>price range (1-4): {restaurant[0]?.price}</h4>
						<h4>Address: {restaurant[0]?.address}</h4>
						<p>
							<Link to='/price'> Go Back </Link>
						</p>
						<p>
							<Link to='/'>Home</Link>
						</p>
					</div>
				);

    }


};

export default RandomByCategory;