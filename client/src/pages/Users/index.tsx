import React from 'react'

function Users({ firsName, lastName, email }: any) {
  console.log('users', firsName)

  return <div>{firsName}</div>
}

export default Users
