import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import TableRow from '../TableRow'
import { Product } from '../../types/ui'
import styles from './MainTable.module.css'

const MainTable = ({ products }: any) => {
  return (
    <div className={styles.Card}>
      {products.loading ? (
        <Icon loading name="spinner" />
      ) : products.error ? (
        <h2>{products.error}</h2>
      ) : (
        <Card.Group itemsPerRow={4}>
          {products &&
						products.map((product: Product) => (
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
        </Card.Group>
      )}
    </div>
  )
}

export default MainTable
