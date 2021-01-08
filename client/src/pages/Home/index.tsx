import React from 'react'
import { Container } from 'semantic-ui-react'

import { HomeProps } from '../../types/ui'
import MainTable from '../../components/MainTable'

export const Home = ({ data }: HomeProps) => {
  return (
    <Container>
      <MainTable products={data} />
    </Container>
  )
}
