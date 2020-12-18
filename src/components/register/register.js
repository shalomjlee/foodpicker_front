import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const Register = ({ onClose, setLoggedIn, setToken, setUserId }) => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState('');
	function success() {
		window.alert('you have been registered');
	}
	function failure() {
		console.log('something went wrong');
	}

	const onSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/api/register/',
			data: user,
		})
			.then((res) => {
				console.log(res)
				setToken(res.data.token);
				setUserId(res.data.userId);
				if (res.data.token) {
					success();
					setLoggedIn(true);
					setRedirect(true);
				} else {
					setError(res.data);
					failure();
				}
			})
			.catch(console.error);
	};

	const onChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	if (redirect) {
		return <Redirect to='/' />;
	}
	
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
						Register
					</Button>
					<Button
						variant='primary'
						className='login-button-modal'
						type='submit'
						onClick={onClose}>
						Close
					</Button>
				</Link>
				<Link to='/login'> Login here</Link>
			</Form>
		</div>
	);
};

export default Register;
