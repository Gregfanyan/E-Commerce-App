import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import MainTable from '../../components/MainTable'
import Navbar from '../../components/Navbar'
import useProduct from '../../Hooks/useProduct'
import useUsers from '../../Hooks/useUsers'
import Users from '../../pages/Users'

export const Home = () => {
  const [query, setQuery] = useState<string>('')
  const [cat, setCat] = useState<string>('')
  const [data] = useProduct(query, cat)
  const [userData] = useUsers()
  console.log(userData)
  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.currentTarget.value)
  }

  const handleSelect: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setCat(e.currentTarget.value)
  }

  return (
    <Container>
      <Navbar
        handleChange={handleChange}
        search={query}
        product={data}
        handleSelect={handleSelect}
        cat={cat}
      />
      <MainTable products={data} />
      <Users users={userData} />
    </Container>
  )
}
