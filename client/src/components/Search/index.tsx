import React from 'react'
import { Input } from 'semantic-ui-react'

import { SearchProps } from '../../types/ui'

function Search({ handleChange, search, isTabletOrMobile }: any) {
	return (
		<Input
			/* fluid={isTabletOrMobile ? true : false} */
			icon="search"
			placeholder="Search..."
			value={search}
			onChange={handleChange}
			/* 			size={`${isTabletOrMobile} ? mini : large}` as any}
			 */
			fluid
		/>
	)
}

export default Search
