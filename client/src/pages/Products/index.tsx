import React from 'react'
import { useSelector } from 'react-redux'

function Products() {
  const cart = useSelector((state: any) => state.products.inCart)

  return (
    <div>
      <div>cart products</div>
      {cart && cart.map((p: any) => <div key={p._id}>{p.name}</div>)}
    </div>
  )
}

export default Products
