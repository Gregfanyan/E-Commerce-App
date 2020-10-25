import React from 'react'

import MainTable from '../../components/MainTable'
import Header from '../../components/Header'

import useProduct from '../../Hooks/useProduct'

export const Home = ({ query }: any) => {
  const [products] = useProduct(query)

  return (
    <div>
      <Header />
      <MainTable products={products} query={query} />
    </div>
  )
}
