import React from 'react'
import { Container } from 'semantic-ui-react'

import { HomeProps } from '../../types/ui'
import MainTable from '../../components/MainTable'
import Footer from '../../components/Footer'

export const Home = ({ data }: HomeProps) => {
  return (
    <>
      <Container>
        <MainTable products={data} />
      </Container>
      <Footer />
    </>
  )
}
