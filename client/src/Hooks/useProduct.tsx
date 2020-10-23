import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts } from '../redux/Products/ProductActions'

const useProduct = (query: any) => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const products = useSelector((state: any) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  useEffect(() => {
    setData(products)
  }, [products])

  return [data]
}

export default useProduct
