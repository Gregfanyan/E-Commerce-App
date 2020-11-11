import React, { useState } from 'react'

import MainTable from '../../components/MainTable'
import Header from '../../components/Header'

import useProduct from '../../Hooks/useProduct'

export const Home = () => {
  const [query, setQuery] = useState<string>('')
  const [data] = useProduct(query)

  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.currentTarget.value)
  }

  return (
    <div>
      <Header handleChange={handleChange} search={query} product={data} />
      <MainTable products={data} />
    </div>
  )
}
