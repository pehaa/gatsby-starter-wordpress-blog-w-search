import React, { useState } from "react"
import SearchForm from "./search-form"
import SearchResults from "./search-results"
import "../css/search.css"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [visible, setVisible] = useState(false)
  return (
    <>
      <button
        className="search-open-button"
        type="button"
        onClick={() => {
          setVisible(true)
        }}
      >
        Search{" "}
        <span role="img" aria-label="magnifying glass">
          🔎
        </span>
      </button>
      {visible && (
        <section className="search-container">
          <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          {searchTerm && <SearchResults searchTerm={searchTerm} />}
          <button
            className="search-close-button"
            type="button"
            onClick={() => {
              setVisible(false)
            }}
          >
            Close
          </button>
        </section>
      )}
    </>
  )
}

export default Search
