import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ViewProduct from '../../components/ViewProduct'

const SingleCountry = () => {
  const { id } = useParams<any>()

  const products = useSelector((state: any) =>
    state.products.products.find((product: any) => product._id === id)
  )

  if (!products) {
    return <div>No product</div>
  }
  return (
    <div>
      <div>
        <ViewProduct
          _id={products._id}
          name={products.name}
          description={products.description}
          categories={products.categories}
          variants={products.variants}
          img={products.img}
          sizes={products.sizes}
          price={products.price}
        />
      </div>
    </div>
  )
}
export default SingleCountry
