import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { login } from '../../../redux/User/UserActions'
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
  const history = useHistory()
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user

  const onChange: React.ReactEventHandler<HTMLInputElement> = (e: any) => {
    let { name, value } = e.currentTarget
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault()

    const newUser = {
      email: email,
      password: password,
    }
    dispatch(login(newUser))
  }

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  const logiFormValid = !email?.length || !password?.length

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
            <Image src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" />
						Log-in to your account
          </Header>
          <Form size="large" onSubmit={handleFormSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                onChange={onChange}
                value={email}
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={onChange}
                value={password}
                name="password"
              />
              <Button color="teal" fluid size="large" disabled={logiFormValid}>
								Login
              </Button>
            </Segment>
          </Form>
          <Message>
						New to us?
            <Link to="/RegisterClone"> Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  )
}
export default Login
