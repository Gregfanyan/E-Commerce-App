import React from 'react'

const Categories = ({ category, handleCatChange }: any) => {
  return (
    <React.Fragment>
      <select onBlur={handleCatChange}>
        <option key={category} value={category}>
          {category}
        </option>
      </select>
    </React.Fragment>
  )
}

export default Categories
