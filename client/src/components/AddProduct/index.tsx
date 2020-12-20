import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Form, Segment, Grid, Button, Modal } from 'semantic-ui-react'

import { CreateNewProduct } from '../../redux/Products/ProductActions'
import styles from './AddProduct.module.css'

const HeaderStyle = {
  textAlign: 'center',
  paddingTop: '10px',
  color: 'teal',
  fontSize: '30px',
}

const AddProduct = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  return (
    <Modal
      size="tiny"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      className={styles.modal}
      trigger={
        <Button color="black" name="Create a Product">
					Create Product
        </Button>
      }
    >
      <Grid centered>
        <Grid.Column>
          <Modal.Header as="h3" style={HeaderStyle}>
						Create a Product
          </Modal.Header>
          <Segment>
            <Formik
              initialValues={{
                name: '',
                description: '',
                categories: [],
                sizes: [],
                variants: [],
                img: '',
                price: 0,
                _id: '',
              }}
              validationSchema={yup.object({
                name: yup
                  .string()
                  .max(20, 'too long')
                  .required('required field'),
                description: yup
                  .string()
                  .min(5, 'too short')
                  .max(25, 'too long')
                  .required('required field'),
                img: yup.string().required('required field'),
                categories: yup.string().required(),
                variants: yup.string().required(),
                sizes: yup.number().required().positive().integer(),
                price: yup.number().required().positive().integer(),
              })}
              onSubmit={(values, { resetForm }) => {
                dispatch(CreateNewProduct(values))
                console.log(values)
                resetForm()
              }}
            >
              {(props: any) => (
                <Form onSubmit={props.handleSubmit}>
                  <Form.Field>
                    <Form.Input
                      value={props.values.name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="name"
                      placeholder="Product name"
                      label="Product Name"
                    />
                    {props.errors.name && (
                      <div id="feedback">{props.errors.name}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={props.values.description}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="description"
                      placeholder="Product description"
                      label="Product description"
                    />
                    {props.errors.description && (
                      <div id="feedback">{props.errors.description}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={props.values.img}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="img"
                      placeholder="Image"
                      label="Image"
                    />
                    {props.errors.img && <div>{props.errors.img}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={props.values.price}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      type="number"
                      name="price"
                      placeholder="price"
                      label="price"
                    />
                    {props.errors.price && <div>{props.errors.price}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={props.values.categories}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="categories"
                      placeholder="categories"
                      label="categories"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={props.values.variants}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="variants"
                      placeholder="variants"
                      label="variants"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={props.values.sizes}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="sizes"
                      placeholder="sizes"
                      label="sizes"
                    />
                  </Form.Field>
                  <Form.Button fluid color="teal" type="submit">
										Create
                  </Form.Button>
                </Form>
              )}
            </Formik>
          </Segment>
        </Grid.Column>
      </Grid>
    </Modal>
  )
}

export default AddProduct
