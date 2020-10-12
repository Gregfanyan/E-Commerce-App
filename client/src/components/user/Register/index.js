import React, { useState } from 'react'

export default () => {
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

        <button type="submit">click</button>
      </form>
    </div>
  )
}
