import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

function Footer() {
  return (
    <Menu inverted borderless>
      <Menu.Item as="a">
        <Icon size="small" color="teal" name="copyright outline" />
				Developed By Grigor Fanyan
      </Menu.Item>
    </Menu>
  )
}

export default Footer
