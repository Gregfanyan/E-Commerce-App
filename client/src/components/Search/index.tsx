import React from 'react'
import { Input } from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive'

import { SearchProps } from '../../types/ui'
const inputStyle = {
  minWidth: '200px',
}
function Search({ handleChange, search }: SearchProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <Input
      type="text"
      style={inputStyle}
      placeholder="Search..."
      value={search}
      onChange={handleChange}
      size="massive"
      fluid
    >
      <input
        style={{
          borderRadius: '100px',
          minWidth: !isTabletOrMobile ? '400px' : '250px',
        }}
      />
    </Input>
  )
}

export default Search
