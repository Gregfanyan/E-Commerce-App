import React, { useEffect } from 'react'
import { Header, Card, Button, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppState } from '../../types'
import { Product } from '../../types/ProductType'
import { isTabletOrMobileProps } from '../../types/ui'
import { getUserWithItemsPopulate } from '../../redux/User/UserActions'
const styles = {
	MenuStyle: {
		marginTop: '87px',
		listStyleType: 'none',
	},
	listStyle: {
		listStyleType: 'none',
	},
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

function Profile({ isTabletOrMobile }: isTabletOrMobileProps) {
	const history = useHistory()
	const [currentUser, setCurrentUser] = React.useState<any>([])
	const dispatch = useDispatch()
	const user = useSelector((state: AppState) => state.user.currentUser)
	const userwithItemsPopulated = useSelector(
		(state: AppState) => state.user.userwithItemsPopulated.user
	)
	const isAuthenticated = useSelector(
		(state: AppState) => state.user.isAuthenticated
	)

	useEffect(() => {
		if (userwithItemsPopulated) {
			dispatch(getUserWithItemsPopulate(user?.id))
		}
	}, [dispatch, userwithItemsPopulated, user])

	useEffect(() => {
		setCurrentUser(userwithItemsPopulated)
	}, [userwithItemsPopulated])

	console.log('currentUser', currentUser)
	console.log('userwithItemsPopulated', userwithItemsPopulated)

	useEffect(() => {
		if (!isAuthenticated && !user) {
			history.push('/')
		}
	}, [history, isAuthenticated, user])

	function handleClick() {
		if (!history) {
			return <div>No product</div>
		} else {
			history.push('/')
		}
	}

	return (
		<>
			<Card.Group
				style={isTabletOrMobile ? styles.MobileBackIcon : styles.backIcon}
				stackable
			>
				<Button primary onClick={handleClick}>
					<Icon name="arrow left"> </Icon>
				</Button>
			</Card.Group>
			<Header as="h1" centered="true" inverted>
				{isAuthenticated && (
					<div>
						Welcome to your dashboard {currentUser?.firstName}
						{currentUser?.lastName}
					</div>
				)}
			</Header>
			<Card
				inverted="true"
				centered
				style={styles.MenuStyle}
				href="#card-example-link-card"
				header={currentUser?.firstName}
				meta={user?.cart ? 'Your purchase' : null}
				description={
					!user?.cart || user?.cart[0] === null ? (
						<div>cart is empty</div>
					) : user?.isAdmin ? null : (
						user.cart &&
						user.cart.map((shoes: Product) => (
							<ul style={styles.listStyle} key={shoes._id}>
								<li>Name: {shoes.name}</li>
								<li>Price: {shoes.price}</li>
							</ul>
						))
					)
				}
				extra={<div> email: {currentUser?.email}</div>}
			></Card>
		</>
	)
}

export default Profile













// import React, { useEffect } from 'react'
// import { Header, Card, Button, Icon } from 'semantic-ui-react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

// import { AppState } from '../../types'
// import { Product } from '../../types/ProductType'
// import { isTabletOrMobileProps } from '../../types/ui'
// import { getUserWithItemsPopulate } from '../../redux/User/UserActions'
// const styles = {
// 	MenuStyle: {
// 		marginTop: '87px',
// 		listStyleType: 'none',
// 	},
// 	listStyle: {
// 		listStyleType: 'none',
// 	},
// 	MobileBackIcon: {
// 		position: 'absolute',
// 		left: 0,
// 		top: '18%',
// 	},
// 	backIcon: {
// 		position: 'absolute',
// 		left: 0,
// 		top: '15%',
// 	},
// }

// function Profile({ isTabletOrMobile }: isTabletOrMobileProps) {
// 	const history = useHistory()
// 	const [currentUser, setCurrentUser] = React.useState<any>([])
// 	const dispatch = useDispatch()
// 	const userwithItemsPopulated = useSelector((state: AppState) => state.user.currentUser)
// /* 	const userwithItemsPopulated = useSelector(
// 		(state: AppState) => state.user.userwithItemsPopulated.user
// 	) */
// 	const isAuthenticated = useSelector(
// 		(state: AppState) => state.user.isAuthenticated
// 	)

// 	useEffect(() => {
// 		if (userwithItemsPopulated) {
// 			dispatch(getUserWithItemsPopulate(userwithItemsPopulated?.id))
// 		}
// 	}, [dispatch, userwithItemsPopulated, userwithItemsPopulated])

// 	useEffect(() => {
// 		setCurrentUser(userwithItemsPopulated)
// 	}, [userwithItemsPopulated])

// 	console.log('currentUser', currentUser)
// 	console.log('userwithItemsPopulated', userwithItemsPopulated)

// 	useEffect(() => {
// 		if (!isAuthenticated && !userwithItemsPopulated) {
// 			history.push('/')
// 		}
// 	}, [history, isAuthenticated, userwithItemsPopulated])

// 	function handleClick() {
// 		if (!history) {
// 			return <div>No product</div>
// 		} else {
// 			history.push('/')
// 		}
// 	}

// 	return (
// 		<>
// 			<Card.Group
// 				style={isTabletOrMobile ? styles.MobileBackIcon : styles.backIcon}
// 				stackable
// 			>
// 				<Button primary onClick={handleClick}>
// 					<Icon name="arrow left"> </Icon>
// 				</Button>
// 			</Card.Group>
// 			<Header as="h1" centered="true" inverted>
// 				{isAuthenticated && (
// 					<div>
// 						Welcome to your dashboard {currentUser?.firstName}
// 						{currentUser?.lastName}
// 					</div>
// 				)}
// 			</Header>
// 			<Card
// 				inverted="true"
// 				centered
// 				style={styles.MenuStyle}
// 				href="#card-example-link-card"
// 				header={currentUser?.firstName}
// 				meta={userwithItemsPopulated?.cart ? 'Your purchase' : null}
// 				description={
// 					!userwithItemsPopulated?.cart || userwithItemsPopulated?.cart[0] === null ? (
// 						<div>cart is empty</div>
// 					) : userwithItemsPopulated?.isAdmin ? null : (
// 						userwithItemsPopulated.cart &&
// 						userwithItemsPopulated.cart.map((shoes: Product) => (
// 							<ul style={styles.listStyle} key={shoes._id}>
// 								<li>Name: {shoes.name}</li>
// 								<li>Price: {shoes.price}</li>
// 							</ul>
// 						))
// 					)
// 				}
// 				extra={<div> email: {currentUser?.email}</div>}
// 			></Card>
// 		</>
// 	)
// }

// export default Profile

