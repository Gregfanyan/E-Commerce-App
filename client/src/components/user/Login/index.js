import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

export default () => {
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

        <button type="submit">click</button>
      </form>
      <form>
        <button type="submit" onClick={(e) => logout(e, removeCookie)}>
          logout
        </button>
      </form>
    </div>
  )
}
