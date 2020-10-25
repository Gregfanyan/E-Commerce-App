import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import { Product } from '../../types/ProductType'

function ViewProduct({
  name,
  description,
  img,
  price,
  variants,
  categories,
}: Product) {
  let history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }
  return (
    <div>
      <Button primary onClick={handleClick}>
        <Icon name="home"> </Icon>
        Back
      </Button>
      <Card.Group itemsPerRow={4} centered>
        <Card>
          <Image src={img} alt="product" wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className="date">{categories}</span>
            </Card.Meta>
            <Card.Meta>
              <span className="date"> Available colors: {variants}</span>
            </Card.Meta>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="dollar" />
              {price}
            </a>
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
