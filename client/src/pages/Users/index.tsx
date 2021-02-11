import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useUsers } from '../../Hooks/useUsers'
import UsersList from '../../components/UsersList'
import { AppState } from '../../types'

function Users() {
  const user = useSelector((state: AppState) => state.user.user)

  const [users] = useUsers()
  const history = useHistory()

  useEffect(() => {
    if (!user) {
      history.push('/home')
    }
  }, [history, user])

  return (
    <Card.Group>
      {users && users.map((users) => <UsersList user={users}></UsersList>)}
    </Card.Group>
  )
}

export default Users
