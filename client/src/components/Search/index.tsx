import React from 'react'
import { Input } from 'semantic-ui-react'

import { SearchProps } from '../../types/ui'
const inputStyle = {
	minWidth: '200px',
}
function Search({ handleChange, search }: SearchProps) {
	console.log('search from search', search)

	return (
		<Input
			style={inputStyle}
			icon="search"
			placeholder="Search..."
			value={search}
			onChange={handleChange}
			fluid
		/>
	)
}

export default Search
