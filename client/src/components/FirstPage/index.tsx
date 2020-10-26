import React from 'react'
import { Icon, Button, Container, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function FirstPage() {
  return (
    <Container text>
      <Image src="https://source.unsplash.com/user/erondu/7rDNSLMKiuc" fluid />

      <Header
        as="h1"
        content="E-Commerce"
        inverted
        style={{
          fontSize: '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '3em',
        }}
      ></Header>
      <Header
        as="h2"
        content="Feel the Motion."
        inverted
        style={{
          fontSize: '1.7em',
          fontWeight: 'normal',
          marginTop: '1.5em',
        }}
      ></Header>
      <Button as={Link} to="/home" primary size="huge">
        Get Started
        <Icon name="arrow right"> </Icon>
      </Button>
      {/*       <Image src="https://source.unsplash.com/user/erondu/7rDNSLMKiuc" />
       */}
    </Container>
  )
}

export default FirstPage
