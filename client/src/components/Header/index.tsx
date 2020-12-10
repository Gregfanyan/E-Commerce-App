import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import { HeaderProps } from '../../types/ui'
import Search from '../Search'
import styles from './Header.module.css'
import Category from '../Category'
import Logout from '../user/Logout'

function Header({ handleChange, handleSelect, search, cat }: HeaderProps) {
  const counter = useSelector((state: AppState) => state.products.counter)
  const user = useSelector((state: AppState) => state.user.user)
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )
  /*   if (!user) {
    return <h1>no data</h1>
  } */

  return (
    <Menu inverted size="large" fixed="top">
      <Menu.Item as={Link} to="/home" name="home">
        <h3>Home</h3>
      </Menu.Item>
      <Category handleSelect={handleSelect} cat={cat} />
      <Menu.Item as={Link} to="/about" name="About">
        <h3>About</h3>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Search search={search} handleChange={handleChange} />
        </Menu.Item>
        {!isAuthenticated ? (
          <Menu.Item>
            <Button color="black" as={Link} to="Login" name="login">
              <Icon name="sign in"> </Icon>Sign In
            </Button>
            <Button color="black" as={Link} to="register" name="register">
              <Icon name="signup"> </Icon>Register
            </Button>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Logout />
          </Menu.Item>
        )}
        {!user.isAdmin === false && user && isAuthenticated ? (
          <Menu.Item as={Link} to="cart">
            <Button animated="vertical" color="black">
              <Button.Content hidden>Shop</Button.Content>
              <Button.Content visible>
                <Icon name="shopping cart" size="large">
                  <div className={styles.Counter}>{counter}</div>
                </Icon>
              </Button.Content>
            </Button>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Button
              color="black"
              as={Link}
              to="AddProduct"
              name="Create a Product"
            >
              <Icon name="add"> </Icon>
            </Button>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  )
}

export default Header
