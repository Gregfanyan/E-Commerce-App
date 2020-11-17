import React, { useRef } from 'react'
import { Button, Menu /* Dropdown */ } from 'semantic-ui-react'

/* const options = [
    { key: 'edit', text: 'Men', value: 'men' },
    { key: 'delete', text: 'Women', value: 'women' },
    { key: 'hide', text: 'Kids', value: 'kids' },
] */

const Categories = ({ category }: any) => {
  const selectRef: any = useRef<HTMLDivElement>(null)

  /*   const [category, setCategory] = useState('')
    console.log(category)

    const handleChange = (
        e: React.SyntheticEvent<HTMLElement, Event>,
        options: any
    ) => {
        setCategory(options.value)
    } */

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Correct?', (selectRef as any).current.value)
  }
  console.log(category)
  return (
    <form onSubmit={handleSubmit}>
      <Menu.Item>
        <Button.Group color="black">
          <Button>
            <select ref={selectRef}>
              <option key={category} value={category}>
                {category}
              </option>
            </select>
          </Button>
          {/*    <Dropdown
                    onChange={handleChange}
                    className="button icon"
                    floating
                    clearable
                    options={options}
                    trigger={<></>}
                /> */}
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
    </form>
  )
}

export default Categories
