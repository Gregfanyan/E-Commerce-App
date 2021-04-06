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
import styles from './MobileNavbar.module.css'
import { AppState } from '../../types'
import { HeaderProps } from '../../types/ui'
import Search from '../Search'

const { Media } = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
}) as any

export default function MobileNavbar({
	handleChange,
	handleSelect,
	search,
	cat,
	children,
}: HeaderProps) {
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
					<Menu.Item as={Link} to="/home" active>
						Home
					</Menu.Item>
					{!isAuthenticated ? (
						<Menu.Item>
							<Menu.Item as="a">Log in</Menu.Item>
							<Menu.Item as="a">Sign Up</Menu.Item>
						</Menu.Item>
					) : (
						<Menu.Item as="a">Log Out</Menu.Item>
					)}
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign="center"
						style={{ minHeight: 80, padding: '1em 0em', marginBottom: 50 }}
						vertical
					>
						<Container>
							<Menu inverted pointing secondary size="large">
								<Menu.Item onClick={handleToggle}>
									<Icon name="sidebar" />
								</Menu.Item>
								{isAuthenticated && (
									<Menu.Item position="right" inverted>
										<Button inverted as={Link} to="/cart">
											<Icon name="shopping cart" size="small">
												<div className={styles.Counter}>{counter}</div>
											</Icon>
										</Button>
									</Menu.Item>
								)}
							</Menu>
							<Menu.Item>
								<Search search={search} handleChange={handleChange} />
							</Menu.Item>
						</Container>
					</Segment>

					{children}
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</Media>
	)
}
