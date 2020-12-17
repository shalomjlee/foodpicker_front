import React, { useState } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import { Form, Button, Modal, Container, Row, Col, Alert } from 'react-bootstrap';
import Home from '../home/home';
import axios from 'axios';
import './login.css';
import NewUser from '../register/register';


const Login = ({ setToken, setLoggedIn, loggedIn, userid, setUserId}) => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [redirect, setRedirect] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const onClose = () => setShowModal(false);
	const onShow = () => setShowModal(true);
	const [error, setError] = useState('');
	function success() {
	window.alert('you are logged in');
	}
	const onSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/api/login/',
			data: user,
		})
			.then((res) => {
				setToken(res.data.token);
				setUserId(res.data.userId);
				if (res.data.token) {
					success();
					setLoggedIn(true);
					setRedirect(true);
				} else {
					setError(res.data);
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
			<h2>Login to your account</h2>
			<h5 className='error'> {error} </h5>
			<Modal
				show={showModal}
				onHide={onClose}
				backdrop='static'
				keyboard={false}
				className='modal-form'
			>

			<NewUser onClose = {onClose} />
			</Modal>
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
						Login
					</Button>
					<Button
						variant='primary'
						className='login-button-modal'
						type='submit'
						onClick={onShow}>
						Sign Up
					</Button>
				</Link>
			</Form>
		</div>
	);
};

export default Login;
