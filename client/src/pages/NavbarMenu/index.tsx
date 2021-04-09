import React from 'react'
import MobileNavbar from '../../components/MobileNavbar'
import { createMedia } from '@artsy/fresnel'

import Navbar from '../../components/Navbar'
import { NavbarProps } from '../../types/ui'

const { MediaContextProvider, Media } = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
})

const NavbarStyle = {
	position: 'sticky',
	top: 0,
	left: 0,
	zIndex: 1,
	/* 	marginBottom: '30px', */
} as React.CSSProperties

const NavbarMenu = ({
	children,
	handleSelect,
	isTabletOrMobile,
	cat,
}: NavbarProps) => {
	return (
		<div style={NavbarStyle}>
			<MediaContextProvider>
				{!isTabletOrMobile ? (
					<Media greaterThan="mobile">
						<Navbar
							handleSelect={handleSelect}
							cat={cat}
							isTabletOrMobile={isTabletOrMobile}
						>
							{children}
						</Navbar>
					</Media>
				) : (
					<MobileNavbar
						children={children}
						isTabletOrMobile={isTabletOrMobile}
					/>
				)}
			</MediaContextProvider>
		</div>
	)
}

export default NavbarMenu
