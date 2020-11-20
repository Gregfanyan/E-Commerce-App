import React, { useState } from 'react'
import { Button, Menu } from 'semantic-ui-react'

const Categories = ({ categories }: any) => {
  const [category, setCategory] = useState('')
  console.log('categories', categories)
  return (
    <form>
      <Menu.Item>
        <Button.Group color="black">
          <Button>
            <select
              value={category}
              onBlur={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>

              {categories &&
								categories.map((option: any) => (
								  <option key={option._id} value={option.categories}>
								    {option.categories}
								  </option>
								))}
            </select>
          </Button>
        </Button.Group>
      </Menu.Item>
    </form>
  )
}
export default Categories
