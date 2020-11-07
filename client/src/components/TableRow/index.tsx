import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { Product } from '../../types/ui'
import { addProduct } from '../../redux'

const TableRow = (product: Product) => {
  const { name, price, img, _id } = product
  const dispatch = useDispatch()

  const CardStyle = { marginTop: '100px' }
  const ContentStyle = {
    backgroundColor: 'grey',
    marginBottom: '0.3px',
  }
  const ImgStyles = {
    minWidth: 'auto',
    height: 400,
    resizeMode: 'contain',
  }

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }

  return (
    <Card raised style={CardStyle}>
      <Image src={img} style={ImgStyles} />

      <Card.Content style={ContentStyle}>
        <Card.Header as={Link} to={`/product/${_id}`}>
          {name}
        </Card.Header>
      </Card.Content>
      <Card.Content extra style={ContentStyle}>
        <Icon name="dollar" />
        {price}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button as={Link} to={`/product/${_id}`} color="violet">
            More Details
          </Button>
          <Button color="green" onClick={handleAddProduct}>
            Add to Basket
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default TableRow
