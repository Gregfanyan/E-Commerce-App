import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

import { UserProps } from '../../types/UserType'
import { Product } from '../../types/ProductType'
function UsersList({ user }: UserProps) {
	const history = useHistory()
	useEffect(() => {
		if (!user) {
			history.push('/home')
		}
	}, [history, user])

	const { firstName, lastName, email, cart } = user

	return (
		<Card inverted="true" centered>
			<div>firstName: {firstName}</div>
			<div>lastName: {lastName}</div>
			<div>email: {email}</div>

			{!cart.length ? (
				<div>cart is empty</div>
			) : (
				cart.map((shoes: Product) => (
					<div key={shoes._id}>
						<div>purchased product</div>
						name: {shoes.name}
						<br />
						price: {shoes.price}
					</div>
				))
			)}
		</Card>
	)
}

export default UsersList
