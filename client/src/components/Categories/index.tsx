import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const Categories = ({ data, handleCatChange, selectedCategory }: any) => {
  function onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index
  }

  const cat = data.map((item: any) => item.categories[0]).filter(onlyUnique)

  console.log('cat', cat)

  return (
    <form>
      <Menu.Item>
        <Button.Group color="black">
          <Button>
            <select value={selectedCategory} onBlur={handleCatChange}>
              <option value="">Select</option>
              {cat &&
								cat.map((option: string) => {
								  console.log(option)
								  return (
								    <option key={option} value={option}>
								      {/* option.categories[0] */ option}
								    </option>
								  )
								})}
            </select>
          </Button>
        </Button.Group>
      </Menu.Item>
    </form>
  )
}
export default Categories

/* import React from 'react'

const Categories = ({ category, handleCatChange }: any) => {
  console.log('categories', category)
  return (
    <React.Fragment>
      <select onChange={handleCatChange}>
        <option key={category} value={category}>
          {category}
        </option>
      </select>
    </React.Fragment>
  )
}

export default Categories
 */
