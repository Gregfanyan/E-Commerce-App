import React, { useState } from 'react'
import { createMedia } from '@artsy/fresnel'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import {
	Button,
	Container,
	Icon,
	Menu,
	Segment,
	Sidebar,
} from 'semantic-ui-react'
import Logout from '../user/Logout'
import styles from './MobileContainer.module.css'
import { AppState } from '../../types'

const { Media } = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
}) as any

export default function MobileContainer({ ...props }: any) {
	const user = useSelector((state: AppState) => state.user.currentUser)
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

	const isAuthenticated = useSelector(
		(state: AppState) => state.user.isAuthenticated
	)
	const counter = useSelector((state: AppState) => state.products.counter)
	const [sidebarOpened, setSidebarOpened] = useState<any>(false)

	const handleSidebarHide = () => {
		setSidebarOpened(false)
	}

	const handleToggle = () => {
		setSidebarOpened(true)
	}

	const { children }: any = props

	return (
		<Media as={Sidebar.Pushable} at="mobile">
			<Sidebar.Pushable>
				<Sidebar
					as={Menu}
					animation="overlay"
					inverted
					onHide={handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item as="a" active>
						Home
					</Menu.Item>
					<Menu.Item as="a">Company</Menu.Item>
					<Menu.Item as="a">Home</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						/* inverted */
						textAlign="center"
						style={{ minHeight: 150, padding: '1em 0em' }}
						vertical
					>
						<Container>
							<Menu
								inverted
								pointing
								secondary
								size="large"
								as={Link}
								to="/cart"
							>
								<Menu.Item onClick={handleToggle}>
									<Icon name="sidebar" />
								</Menu.Item>
								{!isAuthenticated ? (
									<Menu.Item position="right">
										<Button as="a" inverted>
											Log in
										</Button>
										<Button as="a" inverted style={{ marginLeft: '0.5em' }}>
											Sign Up
										</Button>
									</Menu.Item>
								) : (
									<Menu.Item position="right">
										<Button as="a" inverted>
											Log Out
										</Button>
										<Button as="a" inverted>
											<Icon name="shopping cart" size="small">
												<div className={styles.Counter}>{counter}</div>
											</Icon>
										</Button>
									</Menu.Item>
								)}
							</Menu>
						</Container>
					</Segment>

					{children}
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</Media>
	)
}
