import request from 'supertest'

import Products, { ProductDocument } from '../../src/models/Products'
import app from '../../src/app'
import * as dbHelper from '../db-helper'

const nonExistingProductId = '5c57b77b5744fa0b461c7906'

async function createProduct(override?: Partial<ProductDocument>) {
  let product = {
    name: 'AngryBirds',
    description: '2019',
    categories: ['Animation', 'Game'],
    variants: ['Red', 'Chuck', 'Bomb'],
    sizes: ['Red', 'Chuck', 'Bomb'],
  }

  if (override) {
    product = { ...product, ...override }
  }

  return await request(app).post('/api/v1/products').send(product)
}

describe('product controller', () => {
  beforeEach(async () => {
    await dbHelper.connect()
  })

  afterEach(async () => {
    await dbHelper.clearDatabase()
  })

  afterAll(async () => {
    await dbHelper.closeDatabase()
  })

  it('should create a product', async () => {
    const res = await createProduct()
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('_id')
    expect(res.body.name).toBe('angryBirds')
  })

  it('should not create a product with wrong data', async () => {
    const res = await request(app)
      .post('/api/v1/products')
      .send({
        name: 'angryBirds',
        description: '2019',
        categories: ['Animation', 'Game'],
        variants: ['Red', 'Chuck', 'Bomb'],
        sizes: ['Red', 'Chuck', 'Bomb'],
      })
    expect(res.status).toBe(400)
  })

  it('should get back an existing movie', async () => {
    let res = await createProduct()
    expect(res.status).toBe(200)

    const productId = res.body._id
    res = await request(app).get(`/api/v1/products/${productId}`)

    expect(res.body._id).toEqual(productId)
  })

  it('should not get back a non-existing product', async () => {
    const res = await request(app).get(
      `/api/v1/products/${nonExistingProductId}`
    )
    expect(res.status).toBe(404)
  })

  it('should get back all product', async () => {
    const res1 = await createProduct({
      name: 'AngryBirds',
      description: 'eeee',
    })
    const res2 = await createProduct({
      name: 'AngryBirds',
      description: '2019',
    })

    const res3 = await request(app).get('/api/v1/product')

    expect(res3.body.length).toEqual(2)
    expect(res3.body[0]._id).toEqual(res1.body._id)
    expect(res3.body[1]._id).toEqual(res2.body._id)
  })

  it('should update an existing product', async () => {
    let res = await createProduct()
    expect(res.status).toBe(200)

    const productId = res.body._id
    const update = {
      name: 'AngryBirds',
      describe: '2016',
    }

    res = await request(app).put(`/api/v1/products/${productId}`).send(update)

    expect(res.status).toEqual(200)
    expect(res.body.name).toEqual('AngryBirds')
    expect(res.body.description).toEqual(2016)
  })

  it('should delete an existing product', async () => {
    let res = await createProduct()
    expect(res.status).toBe(200)
    const productId = res.body._id

    res = await request(app).delete(`/api/v1/products/${productId}`)

    expect(res.status).toEqual(204)

    res = await request(app).get(`/api/v1/products/${productId}`)
    expect(res.status).toBe(404)
  })
})
