import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Icon, Button } from 'semantic-ui-react'
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

  function handleClick() {
    if (!history) {
      return <div>No user</div>
    } else {
      history.push('/home')
    }
  }

  return (
    <div>
      <Card.Group itemsPerRow={4} style={{ margin: 0, top: 0 }}>
        <Button color="blue" onClick={handleClick}>
          <Icon name="arrow left"> </Icon>
        </Button>
      </Card.Group>
      {users &&
				users.map((item) => <UsersList key={item._id} user={item}></UsersList>)}
    </div>
  )
}

export default Users
