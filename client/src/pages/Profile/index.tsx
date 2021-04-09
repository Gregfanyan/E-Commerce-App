import React from 'react'
import { Header, Card, Button, Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppState } from '../../types'
import { Product } from '../../types/ProductType'
import { isTabletOrMobileProps } from '../../types/ui'

const styles = {
  MenuStyle: {
    marginTop: '87px',
    listStyleType: 'none',
  },
  listStyle: {
    listStyleType: 'none',
  },
  MobileBackIcon: {
    position: 'absolute',
    left: 0,
    top: '18%',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    top: '15%',
  },
}

function Profile({ isTabletOrMobile }: isTabletOrMobileProps) {
  const user = useSelector((state: AppState) => state.user.currentUser)
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )
  const history = useHistory()

  React.useEffect(() => {
    if (!isAuthenticated && !user) {
      history.push('/')
    }
  }, [history, isAuthenticated, user])

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/')
    }
  }

  let userDetails = JSON.parse(localStorage.getItem('user') || '{}')
  console.log('userDetails Profile', userDetails)
  console.log('user', user)

  const gUser = useSelector((state: AppState) => state.user)
  console.log('gUser', gUser)

  return (
    <>
      <Card.Group
        style={isTabletOrMobile ? styles.MobileBackIcon : styles.backIcon}
        stackable
      >
        <Button primary onClick={handleClick}>
          <Icon name="arrow left"> </Icon>
        </Button>
      </Card.Group>
      <Header as="h1" centered="true" inverted>
        {isAuthenticated && (
          <div>
						Welcome to your dashboard {user?.firstName} {user?.lastName}
          </div>
        )}
      </Header>
      <Card
        inverted="true"
        centered
        style={styles.MenuStyle}
        href="#card-example-link-card"
        header={user?.firstName}
        meta={user?.cart ? 'Your purchase' : null}
        description={
          !user?.cart || user?.cart[0] === null ? (
            <div>cart is empty</div>
          ) : user?.isAdmin ? null : (
            user.cart &&
						user.cart.map((shoes: Product) => (
						  <ul style={styles.listStyle} key={shoes._id}>
						    <li>Name: {shoes.name}</li>
						    <li>Price: {shoes.price}</li>
						  </ul>
						))
          )
        }
        extra={<div> email: {user?.email}</div>}
      ></Card>
    </>
  )
}

export default Profile
