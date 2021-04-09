import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import MainTable from '../../components/MainTable'
import Footer from '../../components/Footer'
import HeaderPage from '../../components/HeaderPage'
import { useProduct } from '../../Hooks/useProduct'

const HomeStyle = {
	position: 'relative',
	minHeight: '100vh',
} as React.CSSProperties

export const Home = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [productPerPage] = useState(12)
	const [query, setQuery] = useState<string>('')
	const [cat] = useState<string>('')
	const [data] = useProduct(query, cat)
	const indexOfLastProduct = currentPage * productPerPage
	const indexOfFirstProduct = indexOfLastProduct - productPerPage
	const currentProduct = data?.slice(indexOfFirstProduct, indexOfLastProduct)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
	const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
		setQuery(e.currentTarget.value)
	}
	return (
		<div style={HomeStyle}>
			<HeaderPage handleChange={handleChange} search={query} />
			<Container>
				<MainTable
					products={data}
					currentProduct={query === '' || cat === '' ? currentProduct : data}
					currentPage={!query ? currentPage : null}
					paginate={paginate}
					productPerPage={productPerPage}
				/>
			</Container>
			<Footer />
		</div>
	)
}
