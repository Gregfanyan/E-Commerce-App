import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Icon, Button } from 'semantic-ui-react'

import { useUsers } from '../../Hooks/useUsers'
import Users from '../../components/Users'

function Profile() {
  const [users] = useUsers()
  const history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
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
      {users && users.map((item) => <Users key={item._id} user={item}></Users>)}
    </div>
  )
}

export default Profile
