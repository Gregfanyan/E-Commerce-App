import React from 'react'
import { Header, Card } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'

const MenuStyle = {
  marginTop: '87px',
}

function Profile() {
  const user = useSelector((state: AppState) => state.user.user.user.user)
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )

  return (
    <>
      <Header as="h1" centered inverted>
        {isAuthenticated && (
          <h1>
						Welcome to your dashboard {user.firstName} {user.lastName}
          </h1>
        )}
      </Header>
      <Card
        inverted
        centered
        style={MenuStyle}
        href="#card-example-link-card"
        header={user.firstName}
        meta={user.isAdmin ? 'admin' : user ? 'user' : null}
        description={
          user.cart.length <= 0 || user.cart[0] === null ? (
            <div>cart is empty</div>
          ) : user.isAdmin ? null : (
            user.cart.map((shoes: any) => (
              <div>
                <h5>Purchased</h5>
								quantity: {shoes.quantity}
              </div>
            ))
          )
        }
        extra={user.email}
      ></Card>
    </>
  )
}

export default Profile
