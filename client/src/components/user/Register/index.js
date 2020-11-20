import React, { useState } from 'react'
import { Col, Button, Jumbotron, Container, Form } from 'react-bootstrap'
import { Icon, Card } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './register.css'
import { AppState } from '../../../types/UserType'
import { register } from '../../../redux'

const styles = {
	color: 'white',
	backgroundColor: '#343a40aa',
}

export default () => {
	const [/* data, */ setData] = useState([])
	const [firstName, setFirstName] = useState([])
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()
	const dispatch = useDispatch()

	function handleClick() {
		if (!history) {
			return <div>No country</div>
		} else {
			history.push('/home')
		}
	}

	const saveRegisteration = () => {
		fetch('http://localhost:8000/api/v1/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				setData(result.rows)
			})
			.catch((err) => console.log('error'))
	}
	const handleFirstName = (e) => {
		setFirstName(e.target.value)
	}

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleLastName = (e) => {
		setLastName(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		saveRegisteration()
		setFirstName('')
		setEmail('')
		setPassword('')
		setLastName('')
	}

	return (
		<>
			<Card.Group itemsPerRow={4} color="teal" centered style={{ margin: 0 }}>
				<Button color="teal" onClick={handleClick} centered>
					<Icon name="home"> </Icon>
					Home
				</Button>
			</Card.Group>
			<Container fluid>
				<Jumbotron style={styles} className="jumbo">
					<div className="head2">Register now...</div>
					<Form className="centered" onSubmit={handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} sm={8}>
								<Form.Row>
									<Form.Group as={Col} sm={8} controlId="formGridFirstName">
										<Form.Control
											type="text"
											placeholder="FirstName"
											name="firstName"
											onChange={handleFirstName}
											value={firstName}
										/>
									</Form.Group>
									<Form.Group as={Col} sm={8} controlId="formGridLastName">
										<Form.Control
											type="text"
											placeholder="LastName"
											name="lastName"
											onChange={handleLastName}
											value={lastName}
										/>
									</Form.Group>
									<Form.Group as={Col} sm={8} controlId="formGridEmail">
										<Form.Control
											type="email"
											placeholder="email"
											name="email"
											onChange={handleEmail}
											value={email}
										/>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} sm={8} controlId="formGridPassword">
										<Form.Control
											type="password"
											placeholder="Password"
											onChange={handlePassword}
											value={password}
										/>
									</Form.Group>
								</Form.Row>
							</Form.Group>
						</Form.Row>
						<Button className="btn" variant="info" type="submit">
							Submit
						</Button>
					</Form>
				</Jumbotron>
			</Container>
		</>
	)
}
