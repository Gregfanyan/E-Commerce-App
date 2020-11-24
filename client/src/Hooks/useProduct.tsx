import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts } from '../redux/Products/ProductActions'
import { Product, AppState } from '../types/ProductType'

const useProduct = (query: string, selectedCategory: string) => {
  const [data, setData] = useState<Product[]>([])
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.products.products)

  console.log(query)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    const category = [...products].map((cat: any) => cat.categories[0])
    console.log('useProduct', category)
    setData(category)
    console.log('category', category)
  }, [selectedCategory, products])

  useEffect(() => {
    const sorted = [...products].filter((product: Product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setData(sorted)
  }, [query, products])

  return [data]
}

export default useProduct
