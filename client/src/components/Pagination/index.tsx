import React from 'react'
import { Button } from 'semantic-ui-react'

import styles from './Pagination.module.css'
import { PaginationProps } from '../../types/ui'

function Pagination({
	productPerPage,
	totalProducts,
	paginate,
}: PaginationProps) {
	const pageNumbers = []
	for (let i = 1; i <= totalProducts / productPerPage; i++) {
		pageNumbers.push(i)
	}

	return (
		<div className={styles.pagination}>
			{pageNumbers.map((page) => (
				<div key={page} className={styles.paginatebox}>
					<Button
						style={{ borderRadius: '20%' }}
						color="teal"
						onClick={() => paginate(page)}
					>
						{page}
					</Button>
				</div>
			))}
		</div>
	)
}

export default Pagination
