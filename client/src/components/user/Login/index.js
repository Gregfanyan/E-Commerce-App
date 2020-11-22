import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
  Card,
} from 'semantic-ui-react'

const Login = () => {
  const [/* cookies, */ setCookie, removeCookie] = useCookies(['my-cookies'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  const saveLogin = (setCookie) => {
    axios
      .post('http://localhost:8000/api/v1/user/logIn', {
        email: email,
        password: password,
      })
      .then(function (response) {
        setCookie('auth-token', response.data)
        window.location.href = '/home'
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleSubmit = (e, setCookie) => {
    e.preventDefault()
    saveLogin(setCookie)
    setEmail('')
    setPassword('')
  }
  const logout = () => {
    removeCookie('auth-token')
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <Card.Group itemsPerRow={4} centered style={{ margin: 0 }}>
        <Button color="teal" onClick={handleClick}>
          <Icon name="home"> </Icon>
					Home
        </Button>
      </Card.Group>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" />{' '}
						Log-in to your account
          </Header>
          <Form
            size="large"
            onSubmit={(event) => handleSubmit(event, setCookie)}
          >
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                onChange={handleEmail}
                value={email}
                iconPosition="left"
                placeholder="E-mail address"
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={handlePassword}
                value={password}
              />

              <Button color="teal" fluid size="large">
								Login
              </Button>
            </Segment>
          </Form>
          <Button
            style={{ display: 'none' }}
            as={Link}
            to="/home"
            onClick={(e) => logout(e, removeCookie)}
          >
						logout
          </Button>

          <Message>
						New to us?
            <Link to="/register">Register</Link>.
          </Message>
        </Grid.Column>
      </Grid>
    </>
  )
}
export default Login
