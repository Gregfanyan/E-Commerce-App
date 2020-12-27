import React from 'react'

import { UserProps } from '../../types/UserType'
function Users({ user }: UserProps) {
  if (!user) {
    return <h1>Not found</h1>
  }
  const { firstName, lastName, email, cart } = user

  return (
    <ul>
      <li>firstName: {firstName}</li>
      <li>lastName: {lastName}</li>
      <li>email: {email}</li>
      <li>{!cart.length ? <div>cart is empty</div> : cart}</li>
    </ul>
  )
}

export default Users
