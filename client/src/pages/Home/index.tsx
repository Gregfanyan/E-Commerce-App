import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import MainTable from '../../components/MainTable'
import Header from '../../components/Header'

import useProduct from '../../Hooks/useProduct'

export const Home = () => {
  const [query, setQuery] = useState<string>('')
  const [cat] = useState<string>('')
  const [data] = useProduct(query, cat)

  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.currentTarget.value)
  }

  return (
    <Container>
      <Header
        handleChange={handleChange}
        search={query}
        category={cat}
        product={data}
      />
      <MainTable products={data} />
    </Container>
  )
}
