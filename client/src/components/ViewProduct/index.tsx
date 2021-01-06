import React from 'react'
import { useHistory } from 'react-router-dom'

import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { addProduct } from '../../redux'
import { ViewProductProps } from '../../types/ui'
import styles from './ViewProduct.module.css'

function ViewProduct({ product }: ViewProductProps) {
  const { name, description, img, price, categories } = product
  const history = useHistory()
  const dispatch = useDispatch()

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

  return (
    <>
      <Card.Group itemsPerRow={4} style={{ margin: 0, top: 0 }}>
        <Button color="blue" onClick={handleClick}>
          <Icon name="arrow left"> </Icon>
        </Button>
      </Card.Group>
      <Card.Group itemsPerRow={4} centered className={styles.card}>
        <Card>
          <Image src={img} alt="product" height={300} />
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
      </Card.Group>
    </>
  )
}

export default ViewProduct
