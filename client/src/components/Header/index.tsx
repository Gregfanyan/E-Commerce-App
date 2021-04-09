import React from 'react'
import Search from '../Search'

import styles from './Header.module.css'

const inputStyle = {
	minWidth: '500px',
}

function Header({ handleChange, search }: any) {
	console.log('search from header', search)
	const [query, setQuery] = React.useState<string>('')

	return (
		<div
			className={styles.header}
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
			<Search search={search} handleChange={handleChange} />
		</div>
	)
}

export default Header
