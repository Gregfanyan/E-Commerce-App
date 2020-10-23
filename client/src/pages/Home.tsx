import React from 'react'

import MainTable from '../components/MainTable'
import useProduct from '../Hooks/useProduct'
import { HomeProps } from '../types/ui'

export const Home = ({ query }: HomeProps) => {
  const [products] = useProduct(query)
  return (
    <div>
      <MainTable products={products} />
    </div>
  )
}
