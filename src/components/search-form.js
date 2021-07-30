import React, { useState } from "react"

const SearchForm = ({ searchTerm, setSearchTerm }) => {
  const [value, setValue] = useState(searchTerm)

  const handleSubmit = e => {
    e.preventDefault()
    setSearchTerm(value)
  }

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <label htmlFor="search">Search blog posts:</label>
      <input
        id="search"
        type="search"
        value={value}
        placeholder="ex. block"
        onChange={e => setValue(e.target.value)}
        autoFocus
        autoComplete="off"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
export default SearchForm
