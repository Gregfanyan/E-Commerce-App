import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts } from '../redux/Products/ProductActions'
import { Product } from '../types/ProductType'

const useProduct = (query: any) => {
  const [data, setData] = useState<Product[]>([])
  const dispatch = useDispatch()
  const products = useSelector((state: any) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  useEffect(() => {
    setData(products)
  }, [products])

  /*  useEffect(() => {
    const sorted = [...products].filter((product: Product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setData(sorted)
  }, [query, products]) */

  return [data]
}

export default useProduct
