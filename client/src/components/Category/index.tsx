import React from 'react'

const dropdownlist = ['men', 'women', 'kids']

const Category = ({ handleSelect, cat }: any) => {
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

export default Category
