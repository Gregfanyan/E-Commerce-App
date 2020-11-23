import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import MainTable from '../../components/MainTable'
import Header from '../../components/Header'
import useProduct from '../../Hooks/useProduct'

export const Home = () => {
  const [query, setQuery] = useState<string>('')
  const [cat, setCat] = useState<string>('')
  const [data] = useProduct(query, cat)

  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.currentTarget.value)
  }

  const handleCatChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setCat(e.currentTarget.value)
  }

  return (
    <Container>
      <Header
        handleChange={handleChange}
        handleCatChange={handleCatChange}
        search={query}
        category={cat}
      />
      <MainTable products={data} />
    </Container>
  )
}
