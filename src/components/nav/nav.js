import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';

const nav = ({ setToken, setLoggedIn }) => {
	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Link to='/'>
					<Navbar.Brand id='brand'>Food Picker</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Link to='/favorites' className='nav-link'>
							Favorites
						</Link>
						<Link to='/register' className='nav-link'>
							Sign up
						</Link>
						<Link to='/login' className='nav-link'>
							Log In
						</Link>

						<Link
							to='/register'
							className='nav-link'
							onClick={() => {
								setToken('');
								setLoggedIn(false);
							}}>
							Logout
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default nav;
