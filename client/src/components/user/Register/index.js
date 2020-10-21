import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
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
    password: '',
  }

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    saveRegister(values)
    setSubmitting(false)
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="firstName">firstName</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="lastName" />
          </div>
          <div>
            <label htmlFor="lastName">lastName</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>

          <button type="submit">register</button>
        </Form>
      )}
    </Formik>
  )
}

export default Register
