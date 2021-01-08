import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'

function Profile() {
  const user = useSelector((state: AppState) => state.user.user.user.user)

  return (
    <Menu.Item to="/profile" style={{ marginTop: '87px' }}>
      {user.firstName} {user.lastName} {user.email}
    </Menu.Item>
  )
}

export default Profile
