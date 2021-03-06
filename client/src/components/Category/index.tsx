import React from 'react'
import { Menu } from 'semantic-ui-react'

import styles from './Category.module.css'
import { CategoryProps } from '../../types/ui'
const dropdownlist = ['men', 'women', 'kids']

const Category = ({ handleSelect, cat }: CategoryProps) => {
	return (
		<Menu.Item>
			<select
				id="first"
				value={cat}
				onChange={handleSelect}
				onBlur={handleSelect}
				disabled={!dropdownlist.length}
				className={styles.select}
			>
				<option>Category</option>
				{dropdownlist.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</Menu.Item>
	)
}

export default Category
