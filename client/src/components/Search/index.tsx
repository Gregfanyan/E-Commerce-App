import React from 'react'
import { Input } from 'semantic-ui-react'

import { SearchProps } from '../../types/ui'
const inputStyle = {
	minWidth: '200px',
}
function Search({ handleChange, search }: SearchProps) {
	return (
		<Input
			type="text"
			style={inputStyle}
			placeholder="Search..."
			value={search}
			onChange={handleChange}
			fluid
		>
			<input style={{ borderRadius: '100px' }} />
		</Input>
	)
}

export default Search
