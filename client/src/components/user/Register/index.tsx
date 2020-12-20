import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
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

import { UserRegister } from '../../../redux/User/UserActions'
import styles from './Register.module.css'

const Register = (props: any) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    props.setLogInOpen(true)
    props.setRegisterOpen(false)
  }
  return (
    <Modal
      size="tiny"
      onClose={() => props.setRegisterOpen(false)}
      onOpen={() => props.setRegisterOpen(true)}
      open={props.registerOpen}
      className={styles.modal}
      trigger={
        <Button color="black" name="register">
          <Icon name="signup"> </Icon>Register
        </Button>
      }
    >
      <Grid centered style={{ height: '80vh' }} verticalAlign="middle">
        <Grid.Column>
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
            <Modal.Actions>
              <Message onClick={handleClick}>
								Already have an account?
                <span
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
									Login
                </span>
              </Message>
            </Modal.Actions>
          </Segment>
        </Grid.Column>
      </Grid>
    </Modal>
  )
}

export default Register
