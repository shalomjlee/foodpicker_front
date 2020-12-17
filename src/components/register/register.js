import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const Login = ({ onClose, setLoggedIn }) => {
	const [error, setError] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [show, setShow] = useState(true)
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});
	
	function success() {
		window.alert('you are logged in');
	}
	function failure() {
		window.alert('something went wrong. try again');
	}
	const onSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			// url: 'https://gitwrap-backend.herokuapp.com/user/signup/',
			url: 'http://localhost:8000/api/register/',
			data: user,
		})
			.then((res) => {
				if (res.data.token) {
					success();
					setLoggedIn(true);
					setRedirect(true);
				} else {
					failure();
					setError(res.data);
				}
			})
			.catch(console.error);
		
	};

	const onChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	

	return (
		<div className='modal-container'>
			<h1>Create an Account</h1>
			<Form onSubmit={onSubmit} className='userForm'>
				<Form.Group>
					<Form.Label> Username </Form.Label>
					<Form.Control
						type='username'
						name='username'
						onChange={onChange}
						value={user.username}
						placeholder='Enter Username'
					/>
					<Form.Label>E-mail</Form.Label>
					<Form.Control
						type='email'
						name='email'
						onChange={onChange}
						value={user.email}
						placeholder='user@example.com'
					/>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						name='password'
						onChange={onChange}
						value={user.password}
						placeholder='Enter Password'
					/>
				</Form.Group>
				<Link to='/login'>
					<Button
						variant='primary'
						className='login-button-modal1'
						type='submit'
						onClick={onSubmit}>
						Submit
					</Button>
					<Button
						variant='primary'
						className='login-button-modal'
						type='submit'
						onClick={onClose}
						>
						Close
					</Button>
				</Link>
					<Link to='/login'> Login here</Link>
			</Form>
		</div>
	);
};

export default Login;
