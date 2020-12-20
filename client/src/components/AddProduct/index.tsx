import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { Form, Segment, Grid, Button, Modal, Icon } from 'semantic-ui-react'

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
          <Icon name="add circle" color="teal"></Icon>
					Add Product
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
                sizes: [0],
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
              {({ handleSubmit, errors }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    <Field
                      name="name"
                      placeholder="Product name"
                      label="Product Name"
                      as={Form.Input}
                    />
                    {errors.name && <div id="feedback">{errors.name}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      name="description"
                      placeholder="Product description"
                      label="Product description"
                      as={Form.Input}
                    />
                    {errors.description && (
                      <div id="feedback">{errors.description}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      name="img"
                      placeholder="Image"
                      label="Image"
                      as={Form.Input}
                    />
                    {errors.img && <div>{errors.img}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      type="number"
                      name="price"
                      placeholder="price"
                      label="price"
                      as={Form.Input}
                    />
                    {errors.price && <div>{errors.price}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      name="categories"
                      placeholder="categories"
                      label="categories"
                      as={Form.Input}
                    />
                    {errors.categories && <div>{errors.categories}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      name="variants"
                      placeholder="variants"
                      label="variants"
                      as={Form.Input}
                    />
                    {errors.variants && <div>{errors.variants}</div>}
                  </Form.Field>
                  <Form.Field>
                    <Field
                      name="sizes"
                      placeholder="sizes"
                      label="sizes"
                      as={Form.Input}
                    />
                    {errors.sizes && <div>{errors.sizes}</div>}
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
