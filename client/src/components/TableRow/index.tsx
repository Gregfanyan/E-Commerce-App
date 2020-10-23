import React from 'react'
import { Link } from 'react-router-dom'

import { Product } from '../../types/ui'
import { Wrapper, Heading } from './StyledTableRow'

const TableRow = ({
  name,
  img,
  description,
  price,
  categories,
  variants,
  _id,
}: Product) => {
  return (
    <Wrapper>
      <Heading>Header</Heading>

      <Link
        to={`/country/${_id}`}
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        <div>{name}</div>
      </Link>
      <div>{description}</div>
      <div>{categories}</div>
      <div>{price} euro</div>
      <div>
        {variants && variants.map((lang) => <div key={lang}> {lang}</div>)}
      </div>
      <div>
        <img src={img} alt="product" />
      </div>
    </Wrapper>
  )
}

export default TableRow
