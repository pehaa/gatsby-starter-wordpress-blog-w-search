import React from "react"

const Bio = () => {
  return (
    <div className="new-bio">
      <p>
        This is{" "}
        <a href="https://github.com/pehaa/gatsby-starter-wordpress-blog-w-search">
          a fork
        </a>{" "}
        of the{" "}
        <a href="https://github.com/gatsbyjs/gatsby-starter-wordpress-blog">
          gatsby-starter-wordpress-blog.
        </a>{" "}
        It comes with support for <strong>search functionality.</strong> Search
        results are provided by WordPress search query with some help from{" "}
        <a href="https://www.wpgraphql.com/">WPGraphQL</a> and{" "}
        <a href="https://www.apollographql.com/docs/react/">Apollo Client.</a>
      </p>
    </div>
  )
}

export default Bio
