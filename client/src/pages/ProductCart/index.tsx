import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../types/ProductType'
import { Product, CartItemProps } from '../../types/ui'
import CartItem from '../../components/CartItem'

function ProductCart() {
  const cartProduct = useSelector((state: AppState) => state.products.inCart)

  return (
    <div>
      <div>cart products</div>

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
