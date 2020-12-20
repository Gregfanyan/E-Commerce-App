import React from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Button, Menu } from 'semantic-ui-react'

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
      <Menu.Item> {userDetails.firstName}</Menu.Item>
      <Button color="black" name="logout" onClick={logoutOnClick}>
        <Icon name="sign out"> </Icon>Logout
      </Button>
    </>
  )
}

export default Logout
