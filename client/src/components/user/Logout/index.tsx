import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Button, Menu } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../../types'
import { logout } from '../../../redux/User/UserActions'

function Logout({ isTabletOrMobile }: any) {
  const dispatch = useDispatch()
  let userDetails = JSON.parse(localStorage.getItem('user') || '{}')
  const logoutOnClick = () => {
    dispatch(logout())
    localStorage.clear()
  }
  const user = useSelector((state: AppState) => state.user.user.user.user)
  const history = useHistory()
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )

  useEffect(() => {
    if (!isAuthenticated && !user) {
      history.push('/home')
    }
  }, [history, isAuthenticated, user])
  if (!user) {
    return <div>No user</div>
  }

  return (
    <>
      {!isTabletOrMobile && (
        <Menu.Item as={Link} to="/profile">
          {userDetails.firstName} {userDetails.lastName}
          <Icon
            name="user circle"
            size="large"
            style={{ paddingLeft: '10px' }}
          />
        </Menu.Item>
      )}
      {!isTabletOrMobile && (
        <Button color="black" name="logout" onClick={logoutOnClick}>
          <Icon name="sign out"> </Icon>Logout
        </Button>
      )}
    </>
  )
}

export default Logout
