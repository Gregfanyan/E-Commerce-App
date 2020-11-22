import React from 'react'
import { Input } from 'semantic-ui-react'

import { SearchProps } from '../../types/ui'

function Search({ handleChange, search }: SearchProps) {
  return (
    <Input
      icon="search"
      placeholder="Search..."
      value={search}
      onChange={handleChange}
    />
  )
}

export default Search
