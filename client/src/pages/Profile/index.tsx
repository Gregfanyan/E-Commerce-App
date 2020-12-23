import React from 'react'

import { useUsers } from '../../Hooks/useUsers'
import Users from '../../components/Users'

function Profile() {
  const [users] = useUsers()
  return (
    <div>
      {users && users.map((item) => <Users key={item._id} user={item}></Users>)}
    </div>
  )
}

export default Profile
