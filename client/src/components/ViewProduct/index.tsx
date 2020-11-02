import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Icon, Image, Button, Menu } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { Product } from '../../types/ProductType'
import { buyCar } from '../../redux'

function ViewProduct({
  name,
  description,
  img,
  price,
  variants,
  categories,
}: Product) {
  const history = useHistory()
  const dispatch = useDispatch()
  const HandleClickBuyCar = () => dispatch(buyCar())

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  console.log(buyCar)
  return (
    <div>
      <Button primary onClick={handleClick}>
        <Icon name="home"> </Icon>
        Back
      </Button>
      <Button>
        <Menu.Item>
          <Icon name="shopping cart">
            <div
              style={{
                fontSize: '18px',
                position: 'absolute',
                top: 10,
                right: 33,
              }}
            >
              {/*             {counter}
               */}
            </div>
          </Icon>
        </Menu.Item>
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
              <Button color="green" onClick={HandleClickBuyCar}>
                Add to Basket
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export default ViewProduct
