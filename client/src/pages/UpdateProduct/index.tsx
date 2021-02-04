import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

import { update } from '../../redux'
function UpdateProduct({ product }: any) {
  const dispatch = useDispatch()
  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    description: '',
    categories: [],
    sizes: [],
    variants: '',
    img: '',
    price: '',
  } as any)
  const { id } = useParams<any>()

  useEffect(() => {
    const foundProduct = product.find((p: any) => p._id === id)
    setUpdatedProduct(foundProduct)
  }, [id, product])

  const { name, description, categories, variants, sizes, price, img } =
		updatedProduct || '{}'

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(update(updatedProduct, id))
  }

  const handleChange = (e: any) => {
    let { name, value } = e.currentTarget
    setUpdatedProduct({
      ...product,
      [name]: value,
    })
  }

  if (!product) {
    return <div>No product</div>
  }

  return (
    <Form
      size="mini"
      centered
      onSubmit={handleSubmit}
      style={{ width: '50%', margin: '0 auto' }}
    >
      <Segment stacked centered>
        <Form.Input
          label="name"
          icon="user"
          onChange={handleChange}
          defaultValue={name}
          iconPosition="left"
          placeholder="product name"
          name="name"
          type="text"
        />
        <Form.Input
          icon="file text"
          iconPosition="left"
          placeholder="description"
          type="description"
          onChange={handleChange}
          defaultValue={description}
          name="description"
          label="description"
        />
        <Form.Input
          icon="file text"
          iconPosition="left"
          placeholder="categories"
          type="text"
          onChange={handleChange}
          defaultValue={categories}
          name="categories"
          label="categories"
        />
        <Form.Input
          icon="file text"
          iconPosition="left"
          placeholder="variants"
          type="number"
          onChange={handleChange}
          defaultValue={variants}
          name="variants"
          label="variants"
        />
        <Form.Input
          icon="file text"
          iconPosition="left"
          placeholder="price"
          type="number"
          onChange={handleChange}
          defaultValue={price}
          name="price"
          label="price"
        />
        <Form.Input
          icon="file text"
          iconPosition="left"
          placeholder="sizes"
          type="number"
          onChange={handleChange}
          defaultValue={sizes}
          name="sizes"
          label="sizes"
        />
        <Form.Input
          icon="file text"
          iconPosition="left"
          placeholder="img"
          type="text"
          onChange={handleChange}
          defaultValue={img}
          name="img"
          label="img"
        />

        <Button color="teal" size="large">
					save
        </Button>
      </Segment>
    </Form>
  )
}

export default UpdateProduct
