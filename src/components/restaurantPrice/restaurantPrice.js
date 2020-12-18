import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import axios from 'axios';
const RestaurantPrice = ({match, token, restaurantPrice, setRestaurantPrice}) => {
    // const [price, setPrice] = useState(null);
    const price = [1, 2, 3, 4];
    // const handleChange = (event) => {
    //     event.preventDefault();
    //     axios({
    //         method: "GET",
    //         url: `http://localhost:8000/api/price/${match.params.price}`,
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    // }
    // useEffect(() => {
    //     const restaurantURL = `http://localhost:8000/api/price/${match.params.price}`;

    //     fetch(restaurantURL, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         setRestaurantPrice(res);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     })
    // }, []);

    // if (!restaurantPrice) {
    //     return <div>Loading...</div>
    // }
    return (
			<div id='price' className='section-container'>
				<h2 className='browse-text'>Select random restaurant by price (1=$, 2=$$, 3=$$$, 4=$$$$)</h2>
				<div className='category-area'>
					{price.map((price) => {
						return (
							<div key={price}>
								<div>
                                    <Link 
                                    to={`price/${price}`}
                                    >
										<Card style={{ width: '15rem', height: '12rem' }}>
											<Card.Body className='price-card-body'>
												<Card.Title className='price-card-text'>
                                                {price}
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

export default RestaurantPrice;