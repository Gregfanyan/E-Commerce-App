import React from 'react'
import { useSelector } from 'react-redux'
import { Header, Button, Icon, Card } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

import { AppState } from '../../types'
import CartItem from '../../components/CartItem'
import { isTabletOrMobileProps } from '../../types/ui'

const CartStyle = {
  Cart: {
    textShadow: '0 0 0.8rem #fff',
  },
  MObileBackIcon: {
    right: 100,
    top: '11%',
    margin: 0,
  },
  backIcon: {
    left: 0,
    margin: 0,
    padding: 0,
  },
}

function ProductCart({ isTabletOrMobile }: isTabletOrMobileProps) {
  const cartProduct = useSelector((state: AppState) => state.products.inCart)
  const history = useHistory()
  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  return (
    <div
      style={{
        ...(!isTabletOrMobile
          ? {
            backgroundImage:
								'linear-gradient(to top, #09203f 0%, #537895 100%)',
            minHeight: '39.2rem',
					  }
          : {}),
      }}
    >
      <Card.Group
        style={isTabletOrMobile ? CartStyle.MObileBackIcon : CartStyle.backIcon}
      >
        <Button primary onClick={handleClick}>
          <Icon name="arrow left"> </Icon>
        </Button>
      </Card.Group>
      <Card.Group centered>
        {cartProduct.length > 0 ? (
          <div>
            {cartProduct &&
							cartProduct.map((cart) => {
							  return <CartItem key={cart._id} cart={cart} />
							})}
          </div>
        ) : (
          <Header as="h1" inverted color="yellow">
						cart is empty
          </Header>
        )}
      </Card.Group>
    </div>
  )
}

export default ProductCart
