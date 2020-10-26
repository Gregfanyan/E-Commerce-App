import React from 'react'
import { Input, Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home({ handleChange, search }: any) {
  const counter = useSelector((state: any) => state.car.numOfCars)
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
        <Menu.Item>
          <Icon name="shopping cart">
            <div
              style={{
                fontSize: '18px',
                position: 'absolute',
                top: 10,
                right: 33,
              }}
            >
              {counter}
            </div>
          </Icon>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Home
