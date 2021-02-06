import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const FooterStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '35px',
}
function Footer() {
  return (
    <Menu inverted borderless style={FooterStyle}>
      <Menu.Item as="a">
        <Icon size="small" color="teal" name="copyright outline" />
				Developed By Grigor Fanyan
      </Menu.Item>
    </Menu>
  )
}

export default Footer
