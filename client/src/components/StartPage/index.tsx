import React from 'react'
import { Icon, Button, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'

const styles = {
  backgroundImage: `url(https://source.unsplash.com/user/erondu/7rDNSLMKiuc)`,
  backgroundPosition: 'center 40%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minWidth: '100vw',
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: 1,
} as const

function StartPage() {
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )
  const user = useSelector((state: AppState) => state.user.user)

  console.log(isAuthenticated)
  return (
    <div style={styles}>
      {!isAuthenticated && user ? (
        <Container text>
          <Header
            as="h2"
            content="E-Commerce"
            inverted
            color="yellow"
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              fontFamily: 'Metal Mania',
              textShadow: '0 0 0.8rem #fff',
            }}
          ></Header>

          <Button
            as={Link}
            to="/home"
            primary
            size="huge"
            style={{
              marginTop: '5em',
            }}
          >
						Get Started
            <Icon name="arrow right"> </Icon>
          </Button>
        </Container>
      ) : null}
    </div>
  )
}

export default StartPage
