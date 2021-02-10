import React from 'react'
import { Header, Card } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppState } from '../../types'
import { Product } from '../../types/ProductType'

const styles = {
  MenuStyle: {
    marginTop: '87px',
    listStyleType: 'none',
  },
  listStyle: {
    listStyleType: 'none',
  },
}

function Profile() {
  const user = useSelector((state: AppState) => state.user.currentUser)
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )
  const history = useHistory()

  React.useEffect(() => {
    if (!isAuthenticated && !user) {
      history.push('/home')
    }
  }, [history, isAuthenticated, user])

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
        style={styles.MenuStyle}
        href="#card-example-link-card"
        header={user.firstName}
        meta={user.cart ? 'Your purchase' : null}
        description={
          user.cart.length <= 0 || user.cart[0] === null ? (
            <div>cart is empty</div>
          ) : user.isAdmin ? null : (
            user.cart &&
						user.cart.map((shoes: Product) => (
						  <ul style={styles.listStyle}>
						    <li>Name: {shoes.name}</li>
						    <li>Price: {shoes.price}</li>
						  </ul>
						))
          )
        }
        extra={<div> email: {user.email}</div>}
      ></Card>
    </>
  )
}

export default Profile
