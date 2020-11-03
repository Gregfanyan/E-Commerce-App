import React from 'react'
import { Input, Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header({ handleChange, search }: any) {
  const counter = useSelector((state: any) => state.products.counter)

  const CartStyle = {
    fontSize: '18px',
    position: 'absolute' as 'absolute',
    top: 2,
    right: 38,
  }
  return (
    <Menu inverted size="massive" fixed="top">
      <Menu.Item as={Link} to="/home" name="home" />
      <Menu.Item as={Link} to="/categories" name="Categories" />
      <Menu.Item as={Link} to="/about" name="About" />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
          />
        </Menu.Item>
        <Menu.Item as={Link} to="Login" name="logout">
          <Button color="black">
            <Icon name="sign in"> </Icon>Sign In
          </Button>
        </Menu.Item>
        <Menu.Item as={Link} to="cart">
          <Button color="black">
            <Icon name="shopping cart">
              <div style={CartStyle}>{counter}</div>
            </Icon>
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header
