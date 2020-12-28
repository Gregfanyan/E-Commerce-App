import React, { useState, useEffect } from 'react'
import { Menu, Icon, Button, Header } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import { HeaderProps } from '../../types/ui'
import Search from '../Search'
import styles from './Navbar.module.css'
import Category from '../Category'
import Logout from '../user/Logout'
import Login from '../user/Login'
import Register from '../user/Register'
import AddProduct from '../AddProduct'

function Navbar({ handleChange, handleSelect, search, cat }: HeaderProps) {
  const [loginOpen, setLogInOpen] = useState<boolean>(false)
  const [registerOpen, setRegisterOpen] = useState<boolean>(false)
  const history = useHistory()
  const counter = useSelector((state: AppState) => state.products.counter)
  const user = useSelector((state: AppState) => state.user.user)

  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )

  useEffect(() => {
    if (!isAuthenticated && !user) {
      history.push('/home')
    }
  }, [history, isAuthenticated, user])

  return (
    <Menu inverted size="large" fixed="top">
      <Menu.Item as={Link} to="/home" name="home">
        <Header as="h1" inverted color="yellow" className={styles.header}>
					Shoes
        </Header>
      </Menu.Item>
      <Category handleSelect={handleSelect} cat={cat} />
      <Menu.Menu position="right">
        <Menu.Item>
          <Search search={search} handleChange={handleChange} />
        </Menu.Item>
        {isAuthenticated && user.user.user.isAdmin ? (
          <Menu.Item as={Link} to="profile">
            <Button color="black">Users</Button>
          </Menu.Item>
        ) : null}
        {isAuthenticated && user && user.user.user.isAdmin ? (
          <Menu.Item>
            <AddProduct />
          </Menu.Item>
        ) : null}

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
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar