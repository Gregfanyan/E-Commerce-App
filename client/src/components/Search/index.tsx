import React from 'react'
import { Input } from 'semantic-ui-react'
import { Menu, Icon, Button, Header } from 'semantic-ui-react'

import { SearchProps } from '../../types/ui'
const inputStyle = {
	minWidth: '200px',
}
function Search({ handleChange, search }: any) {
	console.log('search from search', search)

	return (
		<Menu.Item>
			<Input
				style={inputStyle}
				icon="search"
				placeholder="Search...."
				value={search}
				onChange={handleChange}
				fluid
			/>
		</Menu.Item>
	)
}

export default Search
