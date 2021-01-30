import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { Product } from '../../types/ui'
import { addProduct } from '../../redux'
import styles from './TableRow.module.css'

const TableRow = (product: Product) => {
  const { name, price, img, _id } = product
  const dispatch = useDispatch()

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }

  return (
    <Card raised color="black">
      <Image
        src={img}
        style={{ width: '100%', height: 300, objectFit: 'cover' }}
      />
      <Card.Content className={styles.Content}>
        <Card.Header as={Link} to={`/product/${_id}`}>
          {name}
          <Card.Meta>
            <Icon name="dollar" />
            {price}
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
          <Button color="yellow" onClick={handleAddProduct}>
						Add to Cart
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default TableRow
