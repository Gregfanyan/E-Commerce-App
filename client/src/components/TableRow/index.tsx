import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { buyCar } from '../../redux'

import { Product } from '../../types/ui'

const TableRow = ({ name, img, price, _id }: Product) => {
  const dispatch = useDispatch()

  return (
    <Card raised style={{ marginTop: '100px' }}>
      <Image
        src={img}
        style={{
          minWidth: 'auto',
          height: 450,
          resizeMode: 'contain',
        }}
      />

      <Card.Content style={{ backgroundColor: 'grey' }}>
        <Card.Header as={Link} to={`/country/${_id}`}>
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
          <Button as={Link} to={`/country/${_id}`} color="violet">
            More Details
          </Button>
          <Button color="green" onClick={() => dispatch(buyCar())}>
            Add to Basket
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default TableRow
