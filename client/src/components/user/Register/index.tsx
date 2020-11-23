import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
/* import { useForm } from 'react-hook-form'
 */ import {
  Form,
  Segment,
  Grid,
  Button,
  Card,
  Icon,
  Header,
} from 'semantic-ui-react'

import { register } from '../../../redux/User/UserActions'

/* type Inputs = {
	firstName: string
	lastName: string
	password: string
	email: string
} */

const Register = () => {
  /* 	const { register, handleSubmit } = useForm<Inputs>()
	 */ const dispatch = useDispatch()
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

  const handleFormSubmit = (e: any) => {
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

  const registerFormValid =
		!firstName?.length ||
		!lastName?.length ||
		!password?.length ||
		!email?.length

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
                  ref={register}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={lastName}
                  onChange={onChange}
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                  ref={register}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="email"
                  value={email}
                  onChange={onChange}
                  name="email"
                  placeholder="Email"
                  label="Email"
                  ref={register}
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
                  ref={register({ required: true })}
                />
              </Form.Field>

              <Button
                /* onSubmit={handleSubmit(handleFormSubmit)}
								 */ onClick={handleFormSubmit}
                fluid
                color="teal"
                type="submit"
                disabled={registerFormValid}
              >
								Submit
              </Button>
            </Form>

            <Segment>
							Already have an account?
              <Link to="/login">Login</Link>.
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Register
