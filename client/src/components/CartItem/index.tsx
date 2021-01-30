import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import { CartItemProps } from '../../types/ui'
import { removeProduct } from '../../redux'
import { AppState } from '../../types'

const CardStyle = {
  display: 'inline-block',
  marginLeft: '10px',
}

function CartItem({ cart }: CartItemProps) {
  const { name, description, img, price } = cart
  const user = useSelector((state: AppState) => state.user.user)
  const dispatch = useDispatch()

  const handleRemoveProd = () => {
    dispatch(removeProduct(cart))
  }

  const handleBuyProd = () => {
    dispatch(removeProduct(cart))
  }

  return (
    <Card style={CardStyle}>
      <Image
        src={img}
        style={{ width: '100%', height: 300, objectFit: 'cover' }}
      />
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
          <Button
            color="green"
            onClick={handleBuyProd}
            disabled={!user ? true : false}
          >
						Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default CartItem
