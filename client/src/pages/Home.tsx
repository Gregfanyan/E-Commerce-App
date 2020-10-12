import React from 'react'
import Register from '../components/user/Register'
import Login from '../components/user/Login'

import Axios from 'axios'

export default function Home() {
  Axios({
    method: 'GET',
    url: 'http://localhost:8000/api/v1/movies',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    console.log(res.data.message)
  })

  return (
    <div>
      <h1>Hello world</h1>

      <Register />
      <Login />
    </div>
  )
}
