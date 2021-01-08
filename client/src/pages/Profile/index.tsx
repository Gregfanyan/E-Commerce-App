import React, { useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppState } from '../../types'

function Profile() {
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
      {isAuthenticated && user ? (
        <Menu.Item style={{ marginTop: '87px' }}>
          {user.firstName} {user.lastName} {user.email}
        </Menu.Item>
      ) : null}
    </>
  )
}

export default Profile
