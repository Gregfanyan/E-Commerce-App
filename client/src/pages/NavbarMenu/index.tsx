import React from 'react'
import MobileNavbar from '../../components/MobileNavbar'
import { createMedia } from '@artsy/fresnel'

import Navbar from '../../components/Navbar'

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
  handleChange,
  handleSelect,
  isTabletOrMobile,
  search,
  product,
  cat,
}: any) => {
  return (
    <div style={NavbarStyle}>
      <MediaContextProvider>
        {!isTabletOrMobile ? (
          <Media greaterThan="mobile">
            <Navbar
            /*   handleChange={handleChange}
              search={search} */
              product={product}
              handleSelect={handleSelect}
              cat={cat}
              isTabletOrMobile={isTabletOrMobile}
            >
              {children}
            </Navbar>
          </Media>
        ) : (
          <MobileNavbar
/*             handleChange={handleChange}
 */            handleSelect={handleSelect}
            /* search={search} */
            cat={cat}
            children={children}
            product={product}
            isTabletOrMobile={isTabletOrMobile}
          />
        )}
      </MediaContextProvider>
    </div>
  )
}

export default NavbarMenu
