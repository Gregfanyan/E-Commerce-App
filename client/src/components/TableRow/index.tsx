import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

/* import { buyCar } from '../../redux'
 */

import { Product } from '../../types/ui'
import { addProduct } from '../../redux/Products/ProductActions'

const TableRow = (product: Product) => {
  const { name, price, img, _id } = product

  const dispatch = useDispatch()

  const CardStyle = { marginTop: '100px' }
  const ContentStyle = {
    backgroundColor: 'grey',
  }

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }

  /*   const HandleClickBuyCar = () => dispatch(buyCar())
   */

  return (
    <Card raised style={CardStyle}>
      <Image
        src={img}
        style={{
          minWidth: 'auto',
          height: 450,
          resizeMode: 'contain',
        }}
      />

      <Card.Content style={ContentStyle}>
        <Card.Header as={Link} to={`/product/${_id}`}>
          {name}
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="dollar" />
          {price}
        </a>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button as={Link} to={`/product/${_id}`} color="violet">
            More Details
          </Button>
          <Button
            color="green"
            onClick={handleAddProduct}
            /*  onClick={HandleClickBuyCar} */
          >
            Add to Basket
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default TableRow
