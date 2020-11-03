import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Icon, Button } from 'semantic-ui-react'

import { AppState } from '../../types/ProductType'
import CartItem from '../../components/CartItem'

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
    <div>
      <div>cart products</div>
      <div>
        <Button primary onClick={handleClick}>
          <Icon name="home"> </Icon>
          Back
        </Button>
      </div>

      {cartProduct.length > 0 ? (
        <>
          {cartProduct &&
            cartProduct.map((cart) => {
              return <CartItem key={cart._id} cart={cart} />
            })}
        </>
      ) : (
        <div>cart is empty</div>
      )}
    </div>
  )
}

export default ProductCart
