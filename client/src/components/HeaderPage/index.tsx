import React from 'react'
import Search from '../Search'

import { HeaderPageProps } from '../../types/ui'
import styles from './Header.module.css'

const inputStyle = {
	minWidth: '500px',
}

function HeaderPage({ handleChange, search }: HeaderPageProps) {
	return (
		<div
			className={styles.header}
			style={{
				height: `${search === '' ? '65vh' : '27vh'}`,
				padding: `${search === '' ? '9rem 2rem' : '3rem 2rem'}`,
			}}
		>
			{search === '' ? (
				<div className={styles.title}>
					<h1>Online Shoes Shop</h1>
					<h3>Discover the Best Shoes Around</h3>
				</div>
			) : null}
			<div style={inputStyle}>
				<Search search={search} handleChange={handleChange} />
			</div>
		</div>
	)
}

export default HeaderPage
