import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../redux'
import { useHistory } from 'react-router-dom'
import { Icon, Button } from 'semantic-ui-react'

function CartItem({ cart }: any) {
  const { name } = cart

  const dispatch = useDispatch()
  const history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/home')
    }
  }

  const handleRemoveProd = () => {
    dispatch(removeProduct(cart))
  }
  return (
    <div>
      <Button primary onClick={handleClick}>
        <Icon name="home"> </Icon>
        Back
      </Button>
      <div>
        {name}
        <Button onClick={handleRemoveProd}>remove </Button>
      </div>
    </div>
  )
}

export default CartItem
