import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'

import { login } from '../../../redux/User/UserActions'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
  Card,
} from 'semantic-ui-react'

const Login = (props: any) => {
  const history = useHistory()
  const dispatch = useDispatch()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  return (
    <>
      <Card.Group itemsPerRow={4} centered style={{ margin: 0 }}>
        <Button color="teal" onClick={handleClick}>
          <Icon name="home"> </Icon>
					Home
        </Button>
      </Card.Group>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" />
						Log-in to your account
          </Header>
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
            onSubmit={(values, { setSubmitting, resetForm }) => {
              JSON.stringify(values, null, 2)
              dispatch(login(values))
              resetForm()
            }}
          >
            {(props: any) => (
              <Form size="large" onSubmit={props.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    iconPosition="left"
                    placeholder="E-mail address"
                    name="email"
                  />
                  {props.errors.email && (
                    <div id="feedback">{props.errors.email}</div>
                  )}
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="password"
                  />
                  {props.errors.password && (
                    <div id="feedback">{props.errors.password}</div>
                  )}
                  <Button color="teal" fluid size="large">
										Login
                  </Button>
                </Segment>
              </Form>
            )}
          </Formik>
          <Message>
						New to us?
            <Link to="/register"> Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  )
}
export default Login
