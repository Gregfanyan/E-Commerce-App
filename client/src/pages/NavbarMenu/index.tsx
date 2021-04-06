import React from 'react'
import MobileNavbar from '../../components/MobileNavbar'
import { createMedia } from '@artsy/fresnel'
import { useMediaQuery } from 'react-responsive'

import Navbar from '../../components/Navbar'

const { MediaContextProvider, Media } = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
})

const NavbarMenu = ({
	children,
	handleChange,
	handleSelect,
	search,
	product,
	cat,
}: any) => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

	return (
		<MediaContextProvider>
			{!isTabletOrMobile ? (
				<Media greaterThan="mobile">
					<Navbar
						handleChange={handleChange}
						search={search}
						product={product}
						handleSelect={handleSelect}
						cat={cat}
					>
						{children}
					</Navbar>
				</Media>
			) : (
				<Media lessThan="computer">
					<MobileNavbar
						handleChange={handleChange}
						search={search}
						product={product}
						handleSelect={handleSelect}
						cat={cat}
					>
						{children}
					</MobileNavbar>
				</Media>
			)}
		</MediaContextProvider>
	)
}

export default NavbarMenu
