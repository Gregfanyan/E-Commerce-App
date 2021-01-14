import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import { HomeProps } from '../../types/ui'
import MainTable from '../../components/MainTable'
import Footer from '../../components/Footer'

const HomeStyle = {
  position: 'relative',
  minHeight: '100vh',
} as React.CSSProperties

export const Home = ({ data, cat, search }: HomeProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage] = useState(8)

  const indexOfLastProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProduct = data?.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  return (
    <div style={HomeStyle}>
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
