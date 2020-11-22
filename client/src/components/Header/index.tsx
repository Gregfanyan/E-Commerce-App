import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Categories from '../Categories'
import { AppState } from '../../types/ProductType'
import { HeaderProps } from '../../types/ui'
import Search from '../Search'
import styles from './Header.module.css'

function Header({
  handleChange,
  search,
  category,
  handleCatChange,
}: HeaderProps) {
  const counter = useSelector((state: AppState) => state.products.counter)
  console.log('header', category)

  return (
    <Menu inverted size="large" fixed="top">
      <Menu.Item as={Link} to="/home" name="home">
        <h3>Home</h3>
      </Menu.Item>
      <Categories category={category} handleCatChange={handleCatChange} />
      <Menu.Item as={Link} to="/about" name="About">
        <h3>About</h3>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Search search={search} handleChange={handleChange} />
        </Menu.Item>
        <Menu.Item as={Link} to="Login" name="logout">
          <Button color="black">
            <Icon name="sign in"> </Icon>Sign In
          </Button>
        </Menu.Item>
        <Menu.Item as={Link} to="cart">
          <Button color="black">
            <Icon name="shopping cart" size="large">
              <div className={styles.Counter}>{counter}</div>
            </Icon>
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header
