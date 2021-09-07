import React from 'react'

export default function SearchHeader({ searchValue }) {
  return (
    <div className="search-header">
      <div className="search-header--text">
        {searchValue}
      </div>
    </div>
  )
}
