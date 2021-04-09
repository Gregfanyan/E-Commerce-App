import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import { HomeProps } from '../../types/ui'
import MainTable from '../../components/MainTable'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const HomeStyle = {
	position: 'relative',
	minHeight: '100vh',
} as React.CSSProperties

export const Home = ({ data, cat, search, handleChange }: any) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [productPerPage] = useState(12)

	const indexOfLastProduct = currentPage * productPerPage
	const indexOfFirstProduct = indexOfLastProduct - productPerPage
	const currentProduct = data?.slice(indexOfFirstProduct, indexOfLastProduct)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
	console.log('search from home', search)

	return (
		<div style={HomeStyle}>
			<Header handleChange={handleChange} search={search} />
			<Container>
				<MainTable
					products={data}
					currentProduct={search === '' || cat === '' ? currentProduct : data}
					currentPage={!search ? currentPage : null}
					paginate={paginate}
					productPerPage={productPerPage}
				/>
			</Container>
			<Footer />
		</div>
	)
}
