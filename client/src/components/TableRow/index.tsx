import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { Product } from '../../types/ui'
import { addProduct } from '../../redux'
import { AppState } from '../../types'
import styles from './TableRow.module.css'

const ImgStyles = {
  minWidth: '250px',
  height: 340,
  resizeMode: 'contain',
}

const TableRow = (product: Product) => {
  const { name, price, img, _id } = product
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user.user)
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }

  return (
    <Card raised color="black">
      <Image src={img} style={ImgStyles} />

      <Card.Content className={styles.Content}>
        <Card.Header as={Link} to={`/product/${_id}`}>
          {name}
          <Card.Meta>
            <Icon name="dollar" />
            {price}{' '}
          </Card.Meta>
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui buttons">
          <Button
            as={Link}
            to={`/product/${_id}`}
            color="black"
            className={styles.viewbtn}
          >
						View More
          </Button>
          {isAuthenticated && user && !user.user.user.isAdmin ? (
            <Button color="yellow" onClick={handleAddProduct}>
							Add to Cart
            </Button>
          ) : null}
        </div>
      </Card.Content>
    </Card>
  )
}

export default TableRow
