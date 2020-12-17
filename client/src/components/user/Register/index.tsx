import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { Formik, Field } from 'formik'
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
                email: yup
                  .string()
                  .email('invalid email address')
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
              {({ handleSubmit, errors }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    <Field
                      name="firstName"
                      placeholder="First Name"
                      label="First Name"
                      as={Form.Input}
                    />
                    {errors.firstName && (
                      <div id="feedback">{errors.firstName}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      label="Last Name"
                      as={Form.Input}
                    />
                    {errors.lastName && (
                      <div id="feedback">{errors.lastName}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      label="Email"
                      as={Form.Input}
                    />
                    {errors.email && <div>{errors.email}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      label="Password"
                      as={Form.Input}
                    />
                    {errors.password && <div>{errors.password}</div>}
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
