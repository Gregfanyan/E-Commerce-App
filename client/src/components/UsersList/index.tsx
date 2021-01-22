import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

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
    <Card inverted centered>
      <div>firstName: {firstName}</div>
      <div>lastName: {lastName}</div>
      <div>email: {email}</div>

      {!cart.length ? (
        <div>cart is empty</div>
      ) : (
        cart.map((shoes: any) => (
          <div>
            <h5>purchased product</h5>
						name: {shoes.name}
            <br />
						price: {shoes.price}
          </div>
        ))
      )}
    </Card>
  )
}

export default UsersList
