import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react'

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['my-cookies'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const saveLogin = (setCookie) => {
    axios
      .post('http://localhost:8000/api/v1/user/logIn', {
        email: email,
        password: password,
      })
      .then(function (response) {
        setCookie('auth-token', response.data)
        window.location.href = '/home'
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleSubmit = (e, setCookie) => {
    e.preventDefault()
    saveLogin(setCookie)
    setEmail('')
    setPassword('')
  }
  const logout = () => {
    removeCookie('auth-token')
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" />{' '}
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={(event) => handleSubmit(event, setCookie)}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              onChange={handleEmail}
              value={email}
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handlePassword}
              value={password}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Button
          style={{ display: 'none' }}
          as={Link}
          to="/home"
          onClick={(e) => logout(e, removeCookie)}
        >
          logout
        </Button>

        <Message>
          New to us?
          <Button as={Link} color="teal" to="/register">
            Register
          </Button>
        </Message>
      </Grid.Column>
    </Grid>
  )
}
export default Login

/* import React from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'



function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(['my-cookies'])

  const saveLogin = (setCookie, values) => {
    axios
      .post('http://localhost:8000/api/v1/user/logIn', {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        setCookie('auth-token', response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = (values, { setSubmitting, setCookie }) => {
    setSubmitting(true);
    saveLogin(values, setCookie);
    setCookie(values);
    setSubmitting(false)
    console.log(values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    channel: Yup.string().required('Required')
  })

  const logout = () => {
    removeCookie('auth-token')
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, isSubmitting }) => (

          <Form>
            <div>
              <label htmlFor='email'>E-mail</label>
              <Field
                type='text'
                id='email'
                name='email'
              />
              <ErrorMessage name='email' />
            </div>
            <div >
              <label htmlFor='password'>password</label>
              <Field
                type='password'
                id='password'
                name='password'
              />
              <ErrorMessage name='password' />
            </div>
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
      <button type="submit" onClick={(e) => logout(e, removeCookie)}>
        logout
        </button>
    </>
  )
}

export default Login  */

/* import React, { useState } from 'react'
import { useCookies } from 'react-cookie'


import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'

function Login() {
  const [data, setData] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(['my-cookies'])


  const saveLogin = (values) => {
    fetch('http://localhost:8000/api/v1/user/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        setCookie('auth-token', result)
        console.log(values)
      })
      .catch((err) => console.log('error'))
  }

  const initialValues = {
    email: '',
    password: ''
  }

  const oonSubmit = (values, { setCookie, setSubmitting }) => {
    setSubmitting(true);
    saveLogin(values, setCookie);
    setSubmitting(false)
    console.log(values)
  }

  const validationSchema = Yup.object({
    password: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format').required('Required'),
  })

  const logout = () => {
    removeCookie('auth-token')
  }

  return (
    <>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={oonSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form >
            <div>
              <label htmlFor='email'>E-mail</label>
              <Field
                type='text'
                id='email'
                name='email'
              />
              <ErrorMessage name='email' />
            </div>
            <div >
              <label htmlFor='password'>password</label>
              <Field
                type='password'
                id='password'
                name='password'
              />
              <ErrorMessage name='password' />
            </div>
            <button type='submit'>login</button>
          </Form>
        )}
      </Formik>
      <form>
        <button type="submit" onClick={(e) => logout(e, removeCookie)}>
          logout
        </button>
      </form>
    </>
  )
}

export default Login  */
