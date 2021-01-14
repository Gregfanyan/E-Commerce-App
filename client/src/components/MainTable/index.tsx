import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import TableRow from '../TableRow'
import { Product } from '../../types/ui'
import { AppState } from '../../types'
import Pagination from '../Pagination'

const CardStyles = { marginBottom: '30px' }

const MainTable = ({
  products,
  currentProduct,
  currentPage,
  productPerPage,
  paginate,
}: any) => {
  const loading = useSelector((state: AppState) => state.products.loading)
  return (
    <div>
      {loading ? (
        <Icon loading size="huge" color="teal" name="spinner" />
      ) : products.error ? (
        <h2>{products.error}</h2>
      ) : (
        <Card.Group itemsPerRow={4} stackable centered style={CardStyles}>
          {currentProduct &&
						currentProduct.map((product: Product) => (
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
      {!loading ? (
        <Pagination
          productPerPage={productPerPage}
          totalProducts={products?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : null}
    </div>
  )
}

export default MainTable
