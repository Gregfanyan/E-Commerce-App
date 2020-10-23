import React from 'react'

import TableRow from '../TableRow'
import { Product } from '../../types/ui'

const MainTable = ({ products }: any) => {
  console.log(products)

  return (
    <div>
      {products.loading ? (
        <h2>Loading...</h2>
      ) : products.error ? (
        <h2>{products.error}</h2>
      ) : (
        <>
          {products.products &&
            products.products.map((product: Product) => (
              <TableRow
                key={product._id}
                _id={product._id}
                name={product.name}
                description={product.description}
                categories={product.categories}
                variants={product.variants}
                sizes={product.sizes}
                price={product.price}
                img={product.img}
              />
            ))}
        </>
      )}
    </div>
  )
}

export default MainTable
