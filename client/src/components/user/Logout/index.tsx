import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, Button } from 'semantic-ui-react'

import { logout } from '../../../redux/User/UserActions'

function Logout() {
  const dispatch = useDispatch()
  let userDetails = JSON.parse(localStorage.getItem('user') || '{}')

  const logoutOnClick = () => {
    dispatch(logout())
    localStorage.clear()
  }
  return (
    <>
      {userDetails.email}
      <Button
        color="black"
        as={Link}
        to="Login"
        name="logout"
        onClick={logoutOnClick}
      >
        <Icon name="sign out"> </Icon>Logout
      </Button>
    </>
  )
}

export default Logout
