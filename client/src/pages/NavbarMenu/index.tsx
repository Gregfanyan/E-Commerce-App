import React from 'react'
import MobileContainer from '../../components/MobileContainer'
import { createMedia } from '@artsy/fresnel'

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
}: any) => (
	<MediaContextProvider>
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
		<Media lessThan="computer">
			<MobileContainer>{children}</MobileContainer>
		</Media>
	</MediaContextProvider>
)

export default NavbarMenu
