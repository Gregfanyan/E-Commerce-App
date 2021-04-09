import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Icon, Button, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { Product } from '../../types/ui'
import { addProduct } from '../../redux'
import { AppState } from '../../types'
import styles from './TableRow.module.css'

const cart = {
  boxShadow: '1rem 1rem 1rem rgba(140, 153, 153, 0.5)',
}

const TableRow = (product: Product) => {
  const { name, price, img, _id } = product
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user.currentUser)
  const isAuthenticated = useSelector(
    (state: AppState) => state.user.isAuthenticated
  )

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }
  const history = useHistory()
  useEffect(() => {
    if (!isAuthenticated && !user) {
      history.push('/home')
    }
  }, [history, isAuthenticated, user])
  return (
    <Card className={styles.cart} raised color="black" style={cart}>
      <Image
        /* label={{ as: 'a', corner: 'right', icon: 'heart' }}
				 */
        src={img}
        style={{ width: '100%', height: 300, objectFit: 'cover' }}
      />

      <Card.Content className={styles.Content}>
        <Card.Header as={Link} to={`/product/${_id}`}>
          {name}
          <Card.Meta>
            <Icon name="dollar" />
            {price}
          </Card.Meta>
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui buttons">
          <Button as={Link} to={`/product/${_id}`} color="black">
						View More
          </Button>
          {isAuthenticated && user?.isAdmin ? (
            <Button color="yellow" as={Link} to={`/updateProduct/${_id}`}>
							Edit Product
            </Button>
          ) : (
            <Button color="yellow" onClick={handleAddProduct}>
							Add to Cart
            </Button>
          )}
        </div>
      </Card.Content>
    </Card>
  )
}

export default TableRow
