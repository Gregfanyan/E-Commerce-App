import React, { useState } from 'react'
import { createMedia } from '@artsy/fresnel'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import Logout from '../user/Logout'
import styles from './MobileNavbar.module.css'
import { AppState } from '../../types'
import { MobileNavbarProps } from '../../types/ui'
import Login from '../user/Login'
import Register from '../user/Register'

const { Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
}) as any

const sideBarStyle = {
  padding: '1em 0em',
  /* marginBottom: 50, */
  zIndex: 9,
}

export default function MobileNavbar({
  children,
  isTabletOrMobile,
}: MobileNavbarProps) {
  const [loginOpen, setLogInOpen] = useState<boolean>(false)
  const [registerOpen, setRegisterOpen] = useState<boolean>(false)
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )
  const counter = useSelector((state: AppState) => state.products.counter)
  const [sidebarOpened, setSidebarOpened] = useState<any>(false)

  const handleSidebarHide = () => {
    setSidebarOpened(!sidebarOpened)
  }

  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable style={sideBarStyle}>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to="/home" active>
						Home
          </Menu.Item>
          {!isAuthenticated ? (
            <Menu.Item>
              <Menu.Item as="a">
                <Login
                  setRegisterOpen={setRegisterOpen}
                  loginOpen={loginOpen}
                  setLogInOpen={setLogInOpen}
                  setSidebarOpened={setSidebarOpened}
                />
              </Menu.Item>
              <Menu.Item as="a">
                <Register
                  registerOpen={registerOpen}
                  setRegisterOpen={setRegisterOpen}
                  setLogInOpen={setLogInOpen}
                />
              </Menu.Item>
            </Menu.Item>
          ) : (
            <Menu.Item as="a">
              <Logout isTabletOrMobile={isTabletOrMobile} />
            </Menu.Item>
          )}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign="center" vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleSidebarHide}>
                  <Icon name="sidebar" />
                </Menu.Item>

                <Menu.Item position="right" inverted='true'>
                  <Button inverted as={Link} to="/cart">
                    <Icon name="shopping cart" size="small">
                      <div className={styles.Counter}>{counter}</div>
                    </Icon>
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}
