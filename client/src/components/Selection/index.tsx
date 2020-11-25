import React, { useState } from 'react'
import { HeaderProps } from '../../types/ui'

const dropdownlist = ['men', 'women', 'kids']

const FirstDropDown = ({ handleSelect, cat, product }: any) => {
	return (
		<select
			id="first"
			value={cat}
			onChange={handleSelect}
			onBlur={handleSelect}
			disabled={!dropdownlist.length}
		>
			<option>All</option>
			{dropdownlist.map((item) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export default FirstDropDown
