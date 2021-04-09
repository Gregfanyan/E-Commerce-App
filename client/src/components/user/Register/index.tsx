import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import {
  Form,
  Segment,
  Grid,
  Button,
  Icon,
  Header,
  Modal,
  Message,
} from 'semantic-ui-react'

import { AppState } from '../../../types'
import { UserRegister } from '../../../redux/User/UserActions'
import styles from './Register.module.css'
import GoogleLogIn from '../../GoogleLogIn'

const styled = {
  errorText: {
    color: 'red',
  },
  loginLink: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  form: {
    height: '98vh',
  },
  header: {
    paddingTop: '20px',
  },
}

const Register = ({ setLogInOpen, setRegisterOpen, registerOpen }: any) => {
  const isValidated = useSelector((state: AppState) => state.user.isValidated)
  const errorMessage = useSelector(
    (state: AppState) => state?.user.error.message
  )
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = () => {
    setLogInOpen(true)
    setRegisterOpen(false)
  }

  useEffect(() => {
    if (isValidated) {
      history.push('/home')
    }
  }, [history, isValidated])

  return (
    <Modal
      size="tiny"
      onClose={() => setRegisterOpen(false)}
      onOpen={() => setRegisterOpen(true)}
      open={registerOpen}
      className={styles.modal}
      trigger={
        <Button color="black" name="register">
          <Icon name="signup"> </Icon>Register
        </Button>
      }
    >
      <Grid centered style={styled.form} verticalAlign="middle">
        <Grid.Column>
          <Header as="h2" color="teal" textAlign="center" style={styled.header}>
						Create an Account
          </Header>
          <Message>
            <GoogleLogIn registerOpen={registerOpen} />
          </Message>
          <Segment>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                repeatPassword: '',
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
                repeatPassword: yup
                  .string()
                  .test('passwords-match', 'Passwords must match', function (
                    value
                  ) {
                    return this.parent.password === value
                  }),
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
                      <div style={styled.errorText}>{errors.firstName}</div>
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
                      <div style={styled.errorText}>{errors.lastName}</div>
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
                    {errors.email && (
                      <div style={styled.errorText}>{errors.email}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      label="Password"
                      as={Form.Input}
                    />
                    {errors.password && (
                      <div style={styled.errorText}>{errors.password}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      type="password"
                      name="repeatPassword"
                      placeholder="Repeat Password"
                      label="Repeat Password"
                      as={Form.Input}
                    />
                    {errors.repeatPassword && (
                      <div style={styled.errorText}>
                        {errors.repeatPassword}
                      </div>
                    )}
                  </Form.Field>
                  <Form.Button fluid color="teal" type="submit">
										Submit
                  </Form.Button>
                </Form>
              )}
            </Formik>
            <Modal.Actions>
              {errorMessage && <Message color="red"> {errorMessage}</Message>}
              {isValidated && !errorMessage ? (
                <Message
                  success
                  header="Your user registration was successful"
                  content="You may now log-in "
                />
              ) : null}
              <Message onClick={handleClick}>
								Already have an account?
                <span style={styled.loginLink}>Login</span>
              </Message>
            </Modal.Actions>
          </Segment>
        </Grid.Column>
      </Grid>
    </Modal>
  )
}

export default Register
