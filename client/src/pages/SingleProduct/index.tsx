import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card } from 'semantic-ui-react'

import ViewProduct from '../../components/ViewProduct'

const CardStyle = {
  marginTop: '100px',
}

const SingleProduct = () => {
  const { id } = useParams<any>()

  const products = useSelector((state: any) =>
    state.products.products.find((product: any) => product._id === id)
  )

  if (!products) {
    return <div>No product</div>
  }
  return (
    <Card.Group itemsPerRow={4} centered style={CardStyle}>
      <ViewProduct product={products} />
    </Card.Group>
  )
}
export default SingleProduct
