import React from 'react'
import { useSelector } from 'react-redux'
import { Header, Button, Icon } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { AppState } from '../../types'
import CartItem from '../../components/CartItem'

const CartStyle = {
	Cart: {
		textShadow: '0 0 0.8rem #fff',
	},
	MObileBackIcon: {
		position: 'absolute',
		left: 0,
		top: '18%',
	},
	backIcon: {
		position: 'absolute',
		left: 0,
		top: '15%',
	},
}

function ProductCart() {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
	const cartProduct = useSelector((state: AppState) => state.products.inCart)
	const history = useHistory()

	function handleClick() {
		if (!history) {
			return <div>No country</div>
		} else {
			history.push('/')
		}
	}

	return (
		<div>
			<Card.Group
				style={isTabletOrMobile ? CartStyle.MObileBackIcon : CartStyle.backIcon}
				stackable
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
					<Header as="h1" inverted color="yellow" style={CartStyle.Cart}>
						cart is empty
					</Header>
				)}
			</Card.Group>
		</div>
	)
}

export default ProductCart
