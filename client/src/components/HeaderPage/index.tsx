import React from 'react'
import { Header } from 'semantic-ui-react'

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
					<Header size="huge" inverted>
						Online Shoes Shop
					</Header>
					<Header size="large" inverted>
						Discover the Best Shoes Around
					</Header>
				</div>
			) : null}
			<div style={inputStyle}>
				<Search search={search} handleChange={handleChange} />
			</div>
		</div>
	)
}

export default HeaderPage
