import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

import { AppState } from '../../types'
import CartItem from '../../components/CartItem'
import styles from './ProductCart.module.css'

const CardStyle = {
  marginTop: '50px',
  textShadow: '0 0 0.8rem #fff',
}

function ProductCart() {
  const cartProduct = useSelector((state: AppState) => state.products.inCart)

  return (
    <Card.Group centered style={CardStyle}>
      {cartProduct.length > 0 ? (
        <div className={styles.card}>
          {cartProduct &&
						cartProduct.map((cart) => {
						  return <CartItem key={cart._id} cart={cart} />
						})}
        </div>
      ) : (
        <Header as="h1" inverted color="yellow" style={CardStyle}>
					cart is empty
        </Header>
      )}
    </Card.Group>
  )
}

export default ProductCart
