import React from 'react'
import { useHistory /* Link */ } from 'react-router-dom'
import { Card, Icon, Image, Button, Menu } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'

import { addProduct } from '../../redux'
import { AppState } from '../../types/ProductType'
import { ViewProductProps } from '../../types/ui'

function ViewProduct({ product }: ViewProductProps) {
  const { name, description, img, price, categories } = product
  const history = useHistory()
  const counter = useSelector((state: AppState) => state.products.counter)
  const dispatch = useDispatch()

  //ToDo: fix link

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }

  const CartStyle = {
    fontSize: '18px',
    position: 'absolute' as 'absolute',
    top: 12,
    right: 44,
  }

  return (
    <div>
      <Card.Group itemsPerRow={4} centered>
        <Card>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button primary onClick={handleClick}>
                <Icon name="home"> </Icon>
                Back
              </Button>
              <Menu.Item /* as={Link} to="cart" */>
                <Button>
                  <Icon name="shopping cart">
                    <div style={CartStyle}>{counter}</div>
                  </Icon>
                </Button>
              </Menu.Item>
            </div>
          </Card.Content>
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
              <Button color="green" onClick={handleAddProduct}>
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
