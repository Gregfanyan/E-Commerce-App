import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Icon, Button, Card } from 'semantic-ui-react'

import { AppState } from '../../types'
import CartItem from '../../components/CartItem'
import styles from './ProductCart.module.css'

function ProductCart() {
  const cartProduct = useSelector((state: AppState) => state.products.inCart)
  const history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  return (
    <>
      <Card.Group itemsPerRow={4} style={{ margin: 0 }}>
        <Button primary onClick={handleClick}>
          <Icon name="arrow left"> </Icon>
        </Button>
      </Card.Group>
      {cartProduct.length > 0 ? (
        <div className={styles.card}>
          {cartProduct &&
						cartProduct.map((cart) => {
						  return <CartItem key={cart._id} cart={cart} />
						})}
        </div>
      ) : (
        <div className={styles.infoText}>cart is empty</div>
      )}
    </>
  )
}

export default ProductCart
