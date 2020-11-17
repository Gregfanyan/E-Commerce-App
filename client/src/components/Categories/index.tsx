import React, { useState } from 'react'
import { Button, Menu, Dropdown } from 'semantic-ui-react'

import { CatProps } from '../../types/ui'

const options = [
  { key: 'edit', text: 'Men', value: 'men' },
  { key: 'delete', text: 'Women', value: 'women' },
  { key: 'hide', text: 'Kids', value: 'kids' },
]

const Categories = ({ product }: CatProps) => {
  const [category, setCategory] = useState('')
  console.log(category)

  const handleChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    options: any
  ) => {
    setCategory(options.value)
  }

  return (
    <Menu.Item>
      <Button.Group color="black">
        <Button>
          <h3>Categories</h3>
        </Button>
        <Dropdown
          onChange={handleChange}
          className="button icon"
          floating
          clearable
          options={options}
          trigger={<></>}
        />
        {/* <select onChange={(e) => setCategory(e.target.value)}>
          {product &&
            product.map((cat) => (
              <option
                key={cat._id}
                {...options}
              >
                {cat.name}
              </option>
            ))}
        </select> */}
        {/*  <select onChange={(e) => setCategory(e.target.value)}>
              <option>men</option>      
              <option>women</option>
              <option>kids</option>   
        </select>  */}
        {/* 
        {category && (
          <>
            <h2>{category}</h2>
          </>
        )} */}
      </Button.Group>
    </Menu.Item>
  )
}

export default Categories
