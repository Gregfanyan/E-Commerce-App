import React from 'react'
import Search from '../Search'
import { Menu, Icon, Button, Header } from 'semantic-ui-react'

import styles from './Header.module.css'

const inputStyle = {
	minWidth: '500px',
}

function HeaderPage({ handleChange, search }: any) {
	console.log('search from header', search)
	const [query, setQuery] = React.useState<string>('')

	return (
		<div
		/* className={styles.header} */
		/* 	style={{
				height: `${search === '' ? '65vh' : '27vh'}`,
				padding: `${search === '' ? '9rem 2rem' : '3rem 2rem'}`,
			}} */
		>
			{/* 			{search === '' ? (
				<div className={styles.title}>
					<h1>Online Shoes Shop</h1>
					<h3>Discover the Best Shoes Around</h3>
				</div>
			) : null} */}
			<Menu.Item>
				<Search search={search} handleChange={handleChange} />
			</Menu.Item>
		</div>
	)
}

export default HeaderPage
