import React from 'react'

import Axios from 'axios'

export default function Home() {
  Axios({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/movies',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    console.log(res.data.message)
  })

  return <h1>Hello from client side</h1>
}
