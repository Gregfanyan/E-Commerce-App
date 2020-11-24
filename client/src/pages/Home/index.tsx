import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import MainTable from '../../components/MainTable'
import Header from '../../components/Header'
import useProduct from '../../Hooks/useProduct'

export const Home = () => {
  const [query, setQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [data] = useProduct(query, selectedCategory)
  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.currentTarget.value)
  }

  const handleCatChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setSelectedCategory(e.currentTarget.value)
  }

  return (
    <Container>
      <Header
        handleChange={handleChange}
        handleCatChange={handleCatChange}
        search={query}
        /*  category={cat} */

        data={data}
        selectedCategory={selectedCategory}
      />
      <MainTable products={data} />
    </Container>
  )
}
