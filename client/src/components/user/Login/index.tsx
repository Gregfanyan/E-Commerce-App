import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
	Icon,
	Modal,
} from 'semantic-ui-react'

import { AppState } from '../../../types'
import { login } from '../../../redux/User/UserActions'
import styles from './Login.module.css'
import GoogleLogIn from '../../GoogleLogIn'

const ErrorText = {
	color: 'red',
}

const Login = ({
	setLogInOpen,
	setRegisterOpen,
	loginOpen,
	setSidebarOpened,
}: any) => {
	const errorMessage = useSelector(
		(state: AppState) => state.user?.error.message
	)
	const dispatch = useDispatch()
	const handleClick = () => {
		setRegisterOpen(true)
		setLogInOpen(false)
		setSidebarOpened(false)
	}

	return (
		<Modal
			size="tiny"
			onClose={() => setLogInOpen(false)}
			onOpen={() => setLogInOpen(true)}
			open={loginOpen}
			className={styles.modal}
			trigger={
				<Button color="black" name="login">
					<Icon name="sign in" color="teal"></Icon>
					Sign In
				</Button>
			}
		>
			<Grid
				textAlign="center"
				style={{ height: '75vh' }}
				verticalAlign="middle"
			>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" color="teal" textAlign="center">
						<Image src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" />
						Log-in to your account
					</Header>
					<Message>
						<GoogleLogIn />
					</Message>
					<Formik
						initialValues={{ email: '', password: '' }}
						validationSchema={yup.object({
							email: yup
								.string()
								.email('invalid email address')
								.required('required field'),
							password: yup
								.string()
								.max(45, 'must be 25 characters or less')
								.required('required field'),
						})}
						onSubmit={(values, { resetForm }) => {
							JSON.stringify(values, null, 2)
							dispatch(login(values))
							resetForm()
						}}
					>
						{({ handleSubmit, errors }) => (
							<Form size="large" onSubmit={handleSubmit}>
								<Segment stacked>
									<Field
										fluid
										icon="user"
										iconPosition="left"
										placeholder="E-mail address"
										name="email"
										as={Form.Input}
									/>
									{errors.email && <div style={ErrorText}>{errors.email}</div>}
									<Field
										fluid
										icon="lock"
										iconPosition="left"
										placeholder="Password"
										type="password"
										name="password"
										as={Form.Input}
									/>
									{errors.password && (
										<div style={ErrorText}>{errors.password}</div>
									)}
									<Button color="teal" fluid size="large">
										Sign in
									</Button>
								</Segment>
							</Form>
						)}
					</Formik>
					<Modal.Actions>
						{errorMessage && <Message color="red">{errorMessage}</Message>}
						<Message onClick={handleClick}>
							New to us?
							<span style={{ cursor: 'pointer', textDecoration: 'underline ' }}>
								Register
							</span>
						</Message>
					</Modal.Actions>
				</Grid.Column>
			</Grid>
		</Modal>
	)
}
export default Login
