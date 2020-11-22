import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import {
  Form,
  Segment,
  Grid,
  Button,
  Card,
  Icon,
  Image,
  Header,
} from 'semantic-ui-react'

import { register } from '../../../redux'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const { firstName, lastName, email, password } = user

  const onChange: React.ReactEventHandler<HTMLInputElement> = (e: any) => {
    let { name, value } = e.currentTarget
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }

    dispatch(register(newUser))
  }

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  return (
    <>
      <Card.Group itemsPerRow={4} centered style={{ margin: 0 }}>
        <Button color="teal" onClick={handleClick}>
          <Icon name="home"> </Icon>
					Home
        </Button>
      </Card.Group>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" />{' '}
						Create an Account
          </Header>
          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  value={firstName}
                  onChange={onChange}
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={lastName}
                  onChange={onChange}
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={email}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={password}
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                  required
                />
              </Form.Field>

              <Button onClick={handleSubmit} fluid color="teal" type="submit">
								Submit
              </Button>
            </Form>

            <Segment>
							Already have an account?
              <Button as={Link} color="teal" to="/Login">
								Login
              </Button>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Register
