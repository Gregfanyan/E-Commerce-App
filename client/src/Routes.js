import React from "react";
import { Switch, Route } from "react-router-dom";

import Car from "./components/Car";
import { Home } from "./pages/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Car" component={Car} />
  </Switch>
);

export default Routes;
//Login/index.js
/* 

/* import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'


const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['my-cookies'])
  const [data, setData] = useState([])
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
  const logout = (e) => {
    removeCookie('auth-token')
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, setCookie)}>
        <input
          type="text"
          name="email"
          onChange={handleEmail}
          value={email}
          placeholder="email"
        />
        <input
          type="text"
          name="password"
          onChange={handlePassword}
          value={password}
          placeholder="password"
        />

        <button type="submit">login</button>
      </form>
      <form>
        <button type="submit" onClick={(e) => logout(e, removeCookie)}>
          logout
        </button>
      </form>
    </div>
  )
}
export default Login */

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

/*import React, { useState } from 'react'
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

export default Login 


*/


//Register

/* 

import React, { useState } from 'react'

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'

function Register() {
  const [data, setData] = useState([])

  const saveRegister = (values) => {
    fetch('http://localhost:8000/api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result)
      })
      .catch((err) => console.log('error'))
  }

  const initialValues = {
    email: '',
    lastName: '',
    firstName: '',
    password: ''

  }

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    saveRegister(values)
    setSubmitting(false)
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format').required('Required'),
  })

  return (

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
          <div>
            <label htmlFor='firstName'>firstName</label>
            <Field
              type='text'
              id='firstName'
              name='firstName'
            />
            <ErrorMessage name='lastName' />
          </div>
          <div>
            <label htmlFor='lastName'>lastName</label>
            <Field
              type='text'
              id='lastName'
              name='lastName'
            />
            <ErrorMessage name='lastName' />
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

          <button type='submit'>register</button>
        </Form>
      )}
    </Formik>

  )
}

export default Register

*/