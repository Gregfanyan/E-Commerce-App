import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from 'semantic-ui-react'

import { AppState } from '../../types'
import CartItem from '../../components/CartItem'
import styles from './ProductCart.module.css'

function ProductCart() {
  const cartProduct = useSelector((state: AppState) => state.products.inCart)

  return (
    <div className={styles.productCard}>
      {cartProduct.length > 0 ? (
        <div className={styles.card}>
          {cartProduct &&
						cartProduct.map((cart) => {
						  return <CartItem key={cart._id} cart={cart} />
						})}
        </div>
      ) : (
        <Header as="h1" inverted color="yellow" className={styles.infoText}>
					cart is empty
        </Header>
      )}
    </div>
  )
}

export default ProductCart
