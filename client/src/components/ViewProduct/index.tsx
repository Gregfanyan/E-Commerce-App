import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { addProduct } from '../../redux'
import { ViewProductProps } from '../../types/ui'

function ViewProduct({ product }: ViewProductProps) {
  const { name, description, img, price, categories } = product
  const dispatch = useDispatch()

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }

  return (
    <Card>
      <Image
        src={img}
        style={{ width: '100%', height: 300, objectFit: 'cover' }}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{categories}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="dollar" />
        {price}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button color="yellow" onClick={handleAddProduct}>
						Add to Basket
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ViewProduct
