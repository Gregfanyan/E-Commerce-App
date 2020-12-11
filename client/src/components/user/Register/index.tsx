import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  Form,
  Segment,
  Grid,
  Button,
  Card,
  Icon,
  Header,
} from 'semantic-ui-react'

import { UserRegister } from '../../../redux/User/UserActions'

const Register = (props: any) => {
  const dispatch = useDispatch()
  const history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  return (
    <>
      <Card.Group itemsPerRow={4} style={{ margin: 0 }}>
        <Button color="teal" onClick={handleClick}>
          <Icon name="arrow left"> </Icon>
					Home
        </Button>
      </Card.Group>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header as="h2" color="teal" textAlign="center">
						Create an Account
          </Header>
          <Segment>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
              }}
              validationSchema={yup.object({
                firstName: yup
                  .string()
                  .min(3, 'must be at least 3 character')
                  .max(20, 'firstname must between 3 and 20 characters')
                  .required('required field'),
                lastName: yup
                  .string()
                  .min(3, 'must be at least 3 character')
                  .max(25, 'lastname must between 3 and 20 characters')
                  .required('required field'),
                password: yup
                  .string()
                  .min(3, 'must be at least 3 character')
                  .max(25, 'password must between 3 and 20 characters')
                  .required('Password is required'),
              })}
              onSubmit={(values, { resetForm }) => {
                dispatch(UserRegister(values))
                resetForm()
              }}
            >
              {(props: any) => (
                <Form onSubmit={props.handleSubmit}>
                  <Form.Field>
                    <Form.Input
                      value={props.values.firstName}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="firstName"
                      placeholder="First Name"
                      label="First Name"
                    />
                    {props.errors.firstName && (
                      <div id="feedback">{props.errors.firstName}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={props.values.lastName}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="lastName"
                      placeholder="Last Name"
                      label="Last Name"
                    />
                    {props.errors.lastName && (
                      <div id="feedback">{props.errors.lastName}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      type="email"
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="email"
                      placeholder="Email"
                      label="Email"
                    />
                    {props.errors.email && <div>{props.errors.email}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      type="password"
                      name="password"
                      placeholder="Password"
                      label="Password"
                    />
                    {props.errors.password && (
                      <div>{props.errors.password}</div>
                    )}
                  </Form.Field>
                  <Form.Button fluid color="teal" type="submit">
										Submit
                  </Form.Button>
                </Form>
              )}
            </Formik>
            <Segment>
							Already have an account?
              <Link to="/login"> Login</Link>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Register
