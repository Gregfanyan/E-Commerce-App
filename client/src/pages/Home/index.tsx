import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import MainTable from '../../components/MainTable'
import Footer from '../../components/Footer'
import HeaderPage from '../../components/HeaderPage'

const HomeStyle = {
  position: 'relative',
  minHeight: '100vh',
} as React.CSSProperties

export const Home = ({ ...props }: any) => {
  const { data, cat, search, handleChange } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage] = useState(12)
  const indexOfLastProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProduct = data?.slice(indexOfFirstProduct, indexOfLastProduct)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div style={HomeStyle}>
      <HeaderPage handleChange={handleChange} search={search} />
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
