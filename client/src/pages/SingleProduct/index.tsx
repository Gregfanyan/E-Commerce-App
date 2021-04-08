import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Icon, Card } from 'semantic-ui-react'

import ViewProduct from '../../components/ViewProduct'
import { idProps, isTabletOrMobileProps } from '../../types/ui'
import { AppState } from '../../types'

const CartStyle = {
	MobileBackIcon: {
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

const SingleProduct = ({ isTabletOrMobile }: isTabletOrMobileProps) => {
	const { id } = useParams<idProps>()
	const history = useHistory()

	const products = useSelector((state: AppState) =>
		state.products.products.find((product) => product._id === id)
	)

	function handleClick() {
		if (!history) {
			return <div>No country</div>
		} else {
			history.push('/')
		}
	}

	if (!products) {
		return <div>No product</div>
	}
	return (
		<div>
			<Card.Group
				style={isTabletOrMobile ? CartStyle.MobileBackIcon : CartStyle.backIcon}
				stackable
			>
				<Button primary onClick={handleClick}>
					<Icon name="arrow left"> </Icon>
				</Button>
			</Card.Group>

			<Card.Group itemsPerRow={4} centered stackable>
				<ViewProduct product={products} />
			</Card.Group>
		</div>
	)
}
export default SingleProduct
