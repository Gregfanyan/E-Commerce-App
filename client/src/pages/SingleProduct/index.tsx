import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ViewProduct from '../../components/ViewProduct'
import styles from './SingleProduct.module.css'

const SingleProduct = () => {
  const { id } = useParams<any>()

  const products = useSelector((state: any) =>
    state.products.products.find((product: any) => product._id === id)
  )

  if (!products) {
    return <div>No product</div>
  }
  return (
    <div className={styles.singleProd}>
      <ViewProduct product={products} />
    </div>
  )
}
export default SingleProduct
