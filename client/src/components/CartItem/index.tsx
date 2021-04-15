import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Icon, Image, Button, Header, Message } from 'semantic-ui-react'

import { CartItemProps } from '../../types/ui'
import { removeProduct, checkout } from '../../redux'
import { AppState } from '../../types'

const CardStyle = {
  display: 'inline-block',
  marginLeft: '10px',
}

function CartItem({ cart }: CartItemProps) {
  const [alert, setAlert] = useState(true)
  const { name, description, img, price } = cart
  const user = useSelector((state: AppState) => state.user.currentUser)
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )
  const isPurchased = useSelector(
    (state: AppState) => state.products.isPurchased
  )
  const handleRemoveProd = () => {
    dispatch(removeProduct(cart))
  }
  /*   const handleBuyProd = () => {
    dispatch(checkout(cart._id, user.id))
    setTimeout(() => {
      dispatch(removeProduct(cart))
    }, 3000)
  } */

  const handleBuyProd = useCallback(() => {
    dispatch(checkout(cart._id, user.id))
    setTimeout(() => {
      dispatch(removeProduct(cart))
    }, 3000)
  }, [user, dispatch, cart])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!user && <Header color="yellow">Please login to Checkout</Header>}
      <Card style={CardStyle}>
        <Image
          src={img}
          style={{ width: '100%', height: 300, objectFit: 'cover' }}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="dollar" />
          {price}
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button color="red" onClick={handleRemoveProd}>
							remove
            </Button>
            {isAuthenticated && (
              <Button color="green" onClick={handleBuyProd}>
								Checkout
              </Button>
            )}
          </div>
          {isPurchased && alert ? (
            <Message success header="your purchase was successful" />
          ) : null}
        </Card.Content>
      </Card>
    </>
  )
}

export default CartItem
