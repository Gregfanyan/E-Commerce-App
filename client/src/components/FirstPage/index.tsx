import React from 'react'
import { Icon, Button, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function FirstPage() {
  const styles = {
    backgroundImage: `url(https://source.unsplash.com/user/erondu/7rDNSLMKiuc)`,
    backgroundPosition: 'center 40%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: '100vw',
    minHeight: '100vh',
  }
  return (
    <div style={styles}>
      <Container text>
        <Header
          as="h1"
          content="E-Commerce"
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
          }}
        ></Header>

        <Button
          as={Link}
          to="/home"
          primary
          size="huge"
          style={{
            marginTop: '4em',
          }}
        >
          Get Started
          <Icon name="arrow right"> </Icon>
        </Button>
      </Container>
    </div>
  )
}

export default FirstPage
