import React, { useState, useEffect } from 'react'
import { Menu, Icon, Button, Header } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import { NavbarProps } from '../../types/ui'
import styles from './Navbar.module.css'
import Category from '../Category'
import Logout from '../user/Logout'
import Login from '../user/Login'
import Register from '../user/Register'
import AddProduct from '../AddProduct'

const NavbarStyle = {
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 1,
}

function Navbar({
  handleSelect,
  cat,
  isTabletOrMobile,
  children,
}: NavbarProps) {
  const [loginOpen, setLogInOpen] = useState<boolean>(false)
  const [registerOpen, setRegisterOpen] = useState<boolean>(false)
  const history = useHistory()
  const counter = useSelector((state: AppState) => state.products.counter)
  const user = useSelector((state: AppState) => state.user.currentUser)

  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )
  useEffect(() => {
    if (!isAuthenticated && !user && !isTabletOrMobile) {
      history.push('/home')
    }
  }, [history, isAuthenticated, user, isTabletOrMobile])

  return (
    <Menu fluid inverted size="large" stackable style={NavbarStyle} borderless>
      <Menu.Item as={Link} to="/home" name="home">
        <Header as="h1" inverted className={styles.header} color="yellow">
					Home
        </Header>
      </Menu.Item>

      <Category handleSelect={handleSelect} cat={cat} />
      <Menu.Menu position="right">
        {isAuthenticated && user?.isAdmin ? (
          <Menu.Item as={Link} to="users">
            <Button color="black">Users</Button>
          </Menu.Item>
        ) : null}
        {isAuthenticated && user && user.isAdmin ? (
          <Menu.Item>
            <AddProduct />
          </Menu.Item>
        ) : null}

        {!isAuthenticated ? (
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
            <Logout isTabletOrMobile={isTabletOrMobile} />
          </Menu.Item>
        )}

        <Menu.Item as={Link} to="/cart">
          <Button animated="vertical" color="black">
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
              <Icon name="shopping cart" size="large">
                <div className={styles.Counter}>{counter}</div>
              </Icon>
            </Button.Content>
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
