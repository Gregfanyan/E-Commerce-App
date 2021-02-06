import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card } from 'semantic-ui-react'

import ViewProduct from '../../components/ViewProduct'
import { idProps } from '../../types/ui'
import { AppState } from '../../types'
const SingleProduct = () => {
	const { id } = useParams<idProps>()

	const products = useSelector((state: AppState) =>
		state.products.products.find((product) => product._id === id)
	)

	if (!products) {
		return <div>No product</div>
	}
	return (
		<Card.Group itemsPerRow={4} centered stackable>
			<ViewProduct product={products} />
		</Card.Group>
	)
}
export default SingleProduct
