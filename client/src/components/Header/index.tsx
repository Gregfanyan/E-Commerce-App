import React, { useState } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import { HeaderProps } from '../../types/ui'
import Search from '../Search'
import styles from './Header.module.css'
import Category from '../Category'
import Logout from '../user/Logout'
import Login from '../user/Login'
import Register from '../user/Register'

function Header({ handleChange, handleSelect, search, cat }: HeaderProps) {
  const [loginOpen, setLogInOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

  const counter = useSelector((state: AppState) => state.products.counter)
  const user = useSelector((state: AppState) => state.user.user)
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )

  return (
    <Menu inverted size="large" fixed="top">
      <Menu.Item as={Link} to="/home" name="home">
        <h3>Home</h3>
      </Menu.Item>
      <Category handleSelect={handleSelect} cat={cat} />
      <Menu.Menu position="right">
        <Menu.Item>
          <Search search={search} handleChange={handleChange} />
        </Menu.Item>
        {!isAuthenticated && !user ? (
          <Menu.Item>
            <Login
              setRegisterOpen={setRegisterOpen}
              loginOpen={loginOpen}
              setLogInOpen={setLogInOpen}
            />
            <Register
              registerOpen={registerOpen}
              setRegisterOpen={setRegisterOpen}
              setLogInOpen={setLogInOpen}
            />
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Logout />
          </Menu.Item>
        )}
        {isAuthenticated && user && !user.user.user.isAdmin ? (
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
        ) : null}
        {isAuthenticated && user && user.user.user.isAdmin ? (
          <Menu.Item>
            <Button
              color="black"
              as={Link}
              to="AddProduct"
              name="Create a Product"
            >
							Admin Dashboard
            </Button>
          </Menu.Item>
        ) : null}
      </Menu.Menu>
    </Menu>
  )
}

export default Header
