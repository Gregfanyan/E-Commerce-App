import React, { useState } from 'react'
import {
  Button,
  CheckboxProps,
  DropdownProps,
  Form,
  Segment,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

import { CatProps } from '../../types/ui'

const options = [
  { key: 'edit', text: 'Men', value: 'men' },
  { key: 'delete', text: 'Women', value: 'women' },
  { key: 'hide', text: 'Kids', value: 'kids' },
]

const Categories = ({ product }: CatProps) => {
  const [category, setCategory] = useState('')

  return (
    <Menu.Item>
      <Button.Group color="black">
        <Button>
          <h3>Categories</h3>
        </Button>
        {/*    <Dropdown
          className="button icon"
          floating
          options={options}
          trigger={<></>}
        /> */}
        <select onChange={(e) => setCategory(e.target.value)}>
          {product &&
            product.map((cat) => (
              <option
                key={cat.name}
                value={cat.name}
                style={{ color: 'black' }}
              >
                {cat.name}
              </option>
            ))}
        </select>

        {category && (
          <>
            <h2>{category}</h2>
          </>
        )}
      </Button.Group>
    </Menu.Item>
  )
}

export default Categories
