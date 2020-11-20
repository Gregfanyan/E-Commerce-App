import React, { FC, useEffect, useState } from 'react'

interface ICategoriesProps {
	data: {
		categories: string[]
		variants: string[]
		sizes: number[]
		_id: string
		name: string
		description: string
		img: string
		price: number
	}[]
}

const Categories: FC<ICategoriesProps> = ({ data }) => {
  const [selected, setSelected] = useState('data[0].categories[0]')
  console.log(selected)
  const [selectedCategory, setSelectedCategory] = useState(data)

  useEffect(() => {
    const category = data.filter((item) => item.categories[0] === selected)

    setSelectedCategory(category)
  }, [data, selected])

  // Set selected
  const handleSelcet = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
  }

  return (
    <React.Fragment>
      <select onBlur={handleSelcet}>
        {data.map((item: any) =>
          item.categories.map((category: any) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        )}
      </select>
      {selectedCategory.map((category: any) => {
        return (
          <div key={category._id}>
            <p>Name: {category.name}</p>
            <p>Description: {category.description}</p>
            <p>Price: {category.price}</p>
						variants:
            <ul>
              {category.variants.map((e: any) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <img src={category.img} alt="" />
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default Categories
