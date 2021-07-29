import React from "react"
import { Link } from "gatsby"
import { useQuery, gql } from "@apollo/client"
import parse from "html-react-parser"

const GET_RESULTS = gql`
  query($search: String, $after: String) {
    posts(first: 10, after: $after, where: { search: $search }) {
      edges {
        node {
          id
          uri
          title
          excerpt
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

const SearchResults = ({ searchTerm }) => {
  const all = useQuery(GET_RESULTS, {
    variables: { search: searchTerm, after: "" },
  })
  const { data, loading, error, fetchMore } = all
  if (loading && !data)
    return <p className="loading">Searching posts for {searchTerm}...</p>
  if (error) return <p>Error - {error.message}</p>
  const loadMore = () => {
    if (data.posts.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data.posts.pageInfo.endCursor,
        },
        notifyOnNetworkStatusChange: true,
      })
    }
  }
  return (
    <section className="search-results">
      <h2>
        Found {data.posts.edges.length} result(s) for {searchTerm}.
      </h2>
      <ul>
        {data.posts.edges.map(el => {
          return (
            <li key={el.node.id}>
              <Link to={el.node.uri}>{el.node.title}</Link>
              <div className="post-excerpt">{parse(el.node.excerpt)}</div>
            </li>
          )
        })}
      </ul>

      {data.posts.pageInfo.hasNextPage && (
        <button type="button" onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "More results"}
        </button>
      )}
    </section>
  )
}
export default SearchResults
