import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import { CartItemProps } from '../../types/ui'
import { removeProduct } from '../../redux'

function CartItem({ cart }: CartItemProps) {
  const { name, description, img, price } = cart

  const dispatch = useDispatch()

  const handleRemoveProd = () => {
    dispatch(removeProduct(cart))
  }
  return (
    <Card.Group itemsPerRow={4} centered>
      <Card>
        <Image src={img} alt="product" wrapped ui={false} size="small" />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="dollar" />
          {price}
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button color="red" onClick={handleRemoveProd}>
              remove
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default CartItem
