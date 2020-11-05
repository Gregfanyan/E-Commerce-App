import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 'edit', text: 'Men', value: 'edit' },
  { key: 'delete', text: 'Women', value: 'delete' },
  { key: 'hide', text: 'Kids', value: 'hide' },
]

const Categories = () => (
  <Menu.Item>
    <Button.Group color="black">
      <Button>
        <h3>Categories</h3>
      </Button>
      <Dropdown
        className="button icon"
        floating
        options={options}
        trigger={<></>}
      />
    </Button.Group>
  </Menu.Item>
)

export default Categories
