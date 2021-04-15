import React, { useEffect, useState } from 'react'
import { Header, Card, Button, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppState } from '../../types'
import { Product } from '../../types/ProductType'
import { isTabletOrMobileProps } from '../../types/ui'
import { getUserWithItemsPopulate } from '../../redux/User/UserActions'
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
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState<any>([])
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user.currentUser)
  const userwithItemsPopulated = useSelector(
    (state: AppState) => state.user.userwithItemsPopulated
  )
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )

  useEffect(() => {
    dispatch(getUserWithItemsPopulate(user?.id))
  }, [dispatch, user])

  useEffect(() => {
    setCurrentUser(userwithItemsPopulated)
  }, [userwithItemsPopulated, user])

  useEffect(() => {
    if (!isAuthenticated && !user) {
      history.push('/')
    }
  }, [history, isAuthenticated, user])

  function handleClick() {
    if (!history) {
      return <div>No product</div>
    } else {
      history.push('/')
    }
  }

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
						Welcome to your dashboard {currentUser?.firstName}
            {currentUser?.lastName}
          </div>
        )}
      </Header>
      <Card
        inverted="true"
        centered
        style={styles.MenuStyle}
        href="#card-example-link-card"
        header={currentUser?.firstName}
        meta={currentUser?.cart ? 'Your purchase' : null}
        description={
          !currentUser?.cart || currentUser?.cart[0] === null ? (
            <div>cart is empty</div>
          ) : currentUser?.isAdmin ? null : (
            currentUser.cart &&
						currentUser.cart.map((shoes: Product, index: any) => (
						  <ul style={styles.listStyle} key={index}>
						    <li>Name: {shoes}</li>
						    {/* <li>Price: {shoes.price}</li> */}
						  </ul>
						))
          )
        }
        extra={<div> email: {currentUser?.email}</div>}
      ></Card>
    </>
  )
}

export default Profile
