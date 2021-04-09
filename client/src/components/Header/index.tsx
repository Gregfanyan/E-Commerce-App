import React from 'react'
import styles from './Header.module.css'

function Header({ handleChange, search }: any) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Online Shoes Shop</h1>
        <h3>Discover the Best Shoes Around</h3>
      </div>
    </div>
  )
}

export default Header
