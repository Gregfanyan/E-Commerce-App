import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, Button } from 'semantic-ui-react'

import { logout } from '../../../redux/User/UserActions'

function Logout() {
  const dispatch = useDispatch()

  const logoutOnClick = () => {
    dispatch(logout())
    localStorage.clear()
  }
  return (
    <Button
      color="black"
      as={Link}
      to="Login"
      name="logout"
      onClick={logoutOnClick}
    >
      <Icon name="sign out"> </Icon>Logout
    </Button>
  )
}

export default Logout
