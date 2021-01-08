import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { UserProps } from '../../types/UserType'

function UsersList({ user }: UserProps) {
  const history = useHistory()
  useEffect(() => {
    if (!user) {
      history.push('/home')
    }
  }, [history, user])

  const { firstName, lastName, email, cart } = user

  return (
    <ul>
      <li>firstName: {firstName}</li>
      <li>lastName: {lastName}</li>
      <li>email: {email}</li>
      <li>
        {!cart.length ? (
          <div>cart is empty</div>
        ) : (
          cart.map((shoes: any) => (
            <div>
							name: {shoes.name}
              <br />
							price: {shoes.price}
            </div>
          ))
        )}
      </li>
    </ul>
  )
}

export default UsersList
