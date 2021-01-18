import React from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Button, Menu } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'

import { logout } from '../../../redux/User/UserActions'

function Logout({ isTabletOrMobile }: any) {
  const history = useHistory()
  const dispatch = useDispatch()
  let userDetails = JSON.parse(localStorage.getItem('user') || '{}')
  const logoutOnClick = () => {
    dispatch(logout())
    localStorage.clear()
    history.push('/home')
  }
  return (
    <>
      <Menu.Item as={Link} to="/profile">
        {userDetails.firstName} {userDetails.lastName}
        <Icon name="user circle" size="large" style={{ paddingLeft: '10px' }} />
      </Menu.Item>
      {!isTabletOrMobile && (
        <Button color="black" name="logout" onClick={logoutOnClick}>
          <Icon name="sign out"> </Icon>Logout
        </Button>
      )}
    </>
  )
}

export default Logout
