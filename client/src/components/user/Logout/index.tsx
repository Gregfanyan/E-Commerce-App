import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon, Button, Menu } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'

import { logout } from '../../../redux/User/UserActions'
import { mediaQueryProps } from '../../../types/ui'
import { AppState } from '../../../types'

function Logout({ isTabletOrMobile }: mediaQueryProps) {
  const history = useHistory()
  const dispatch = useDispatch()
  //let userDetails = JSON.parse(localStorage.getItem('user') || '{}')
  const user = useSelector((state: AppState) => state.user.currentUser)
  const logoutOnClick = () => {
    dispatch(logout())
    localStorage.clear()
    history.push('/home')
  }
  return (
    <>
      <Menu.Item as={Link} to="/profile">
        {user.firstName} {user.lastName}
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
