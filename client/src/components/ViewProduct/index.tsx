import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Icon, Image, Button, Menu } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { Product, AppState } from '../../types/ProductType'

function ViewProduct({ name, description, img, price, categories }: Product) {
  const history = useHistory()
  const counter = useSelector((state: AppState) => state.products.counter)

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  const CartStyle = {
    fontSize: '18px',
    position: 'absolute' as 'absolute',
    top: 2,
    right: 38,
  }

  return (
    <div>
      <Button primary onClick={handleClick}>
        <Icon name="home"> </Icon>
        Back
      </Button>
      <Menu.Item>
        <Button>
          <Icon name="shopping cart">
            <div style={CartStyle}>{counter}</div>
          </Icon>
        </Button>
      </Menu.Item>
      <Card.Group itemsPerRow={4} centered>
        <Card>
          <Image src={img} alt="product" wrapped ui={false} />
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
              <Button color="green">Add to Basket</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export default ViewProduct
