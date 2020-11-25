import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts } from '../redux/Products/ProductActions'
import { Product, AppState } from '../types/ProductType'

const useProduct = (query: string, cat: string) => {
	const [data, setData] = useState<Product[]>([])
	const dispatch = useDispatch()
	const products = useSelector((state: AppState) => state.products.products)
	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	useEffect(() => {
		if (cat === 'All') {
			setData(products)
		} else {
			const sorted = [...products].filter((product: Product) =>
				product.name.toLowerCase().includes(query.toLowerCase())
			)
			const selected = [...sorted].filter((product: Product) =>
				product.categories[0].toLowerCase().includes(cat.toLowerCase())
			)

			setData(selected)
		}
	}, [query, products, cat])

	return [data]
}

export default useProduct
