import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
const RestaurantPrice = () => {
    const price = [1, 2, 3, 4];
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