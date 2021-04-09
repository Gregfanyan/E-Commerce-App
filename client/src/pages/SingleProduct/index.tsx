import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Icon, Card } from 'semantic-ui-react'

import ViewProduct from '../../components/ViewProduct'
import { idProps, isTabletOrMobileProps } from '../../types/ui'
import { AppState } from '../../types'

const CartStyle = {
	MobileBackIcon: {
		left: 0,
		top: '11%',
		margin: 0,
	},
	backIcon: {
		left: 0,
		margin: 0,
	},
	cartItem: {
		boxShadow: '1rem rgba(140, 153, 153, 0.5)',
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
			history.push('/home')
		}
	}

	if (!products) {
		return <div>No product</div>
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
				style={isTabletOrMobile ? CartStyle.MobileBackIcon : CartStyle.backIcon}
			>
				<Button primary onClick={handleClick}>
					<Icon name="arrow left"> </Icon>
				</Button>
			</Card.Group>

			<Card.Group itemsPerRow={4} centered stackable style={CartStyle.cartItem}>
				<ViewProduct product={products} />
			</Card.Group>
		</div>
	)
}
export default SingleProduct
