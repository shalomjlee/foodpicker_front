import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';

const RestaurantCategory = ({restaurants, setRestaurants, match, token}) => {

    const restaurantCategories = [
			 'American' ,
			 'Chinese' ,
			 'Brazilian' ,
			 'Vietnamese' ,
			 'Japanese' ,
			 'Breakfast' ,
			 'Dessert' ,
			 'Barbeque' ,
			 'Coffee' ,
			 'Italian' ,
			 'Vegan' ,
			 'Thai' ,
        ];
        
    // useEffect(() => {
    //     const restaurantURL = `http://localhost:8000/restaurants/${match.params.category}`;
    //     fetch(restaurantURL, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         setRestaurants(res);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });
    // }, [])

    // if(!restaurants) {
    //     return <div>Loading...</div>
    // }
    console.log(restaurantCategories['name'])
    return (
			<div id='category' className='section-container'>
				<h2 className='browse-text'>Select random restaurant by category</h2>
				<div className='category-area'>
					{restaurantCategories.map((category) => {
						return (
							<div key={category.name}>
								<div className='card-div'>
									<Link to={`category/${category}`}>
										<Card style={{ width: '15rem', height: '12rem' }}>
											<Card.Body className='category-card-body'>
												<Card.Title className='category-card-text'>
													{category}
												</Card.Title>
											</Card.Body>
										</Card>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
};

export default RestaurantCategory;