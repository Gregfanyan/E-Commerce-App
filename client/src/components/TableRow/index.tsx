import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { Product } from '../../types/ui'
import { addProduct } from '../../redux'
import styles from './TableRow.module.css'

const ImgStyles = {
  minWidth: 'auto',
  height: 400,
  resizeMode: 'contain',
}

const TableRow = (product: Product) => {
  const { name, price, img, _id } = product
  const dispatch = useDispatch()

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }

  return (
    <Card raised>
      <Image src={img} style={ImgStyles} />

      <Card.Content className={styles.Content}>
        <Card.Header as={Link} to={`/product/${_id}`}>
          {name}
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Icon name="dollar" />
        {price}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button as={Link} to={`/product/${_id}`} color="black">
            View More
          </Button>
          <Button color="yellow" onClick={handleAddProduct}>
            Add to Basket
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default TableRow
