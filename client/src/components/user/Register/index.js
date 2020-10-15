/* import React, { useState } from 'react'

const Register = () => {
  const [data, setData] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const saveRegister = () => {
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
        setData(result)
        console.log(result)
      })
      .catch((err) => console.log('error'))
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    saveRegister()
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firsName"
          onChange={handleFirstName}
          value={firstName}
          placeholder="firstName"
        />
        <input
          type="text"
          name="lastName"
          onChange={handleLastName}
          value={lastName}
          placeholder="lastName"
        />
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

        <button type="submit">signup</button>
      </form>
    </div>
  )
}

export default Register */

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
    saveRegister(values)
    setSubmitting(true);
    console.log(values);
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
            <ErrorMessage name='firstName' />
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

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>

  )
}

export default Register 