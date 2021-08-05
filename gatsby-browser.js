// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"
import React from "react"
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import fetch from "cross-fetch"
import { relayStylePagination } from "@apollo/client/utilities"
import Search from "./src/components/search"

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: relayStylePagination(["where"]),
      },
    },
  },
})
const httpLink = new HttpLink({
  uri: `https://wpgatsbydemo.wpengine.com/graphql`,
  fetch,
})
const client = new ApolloClient({
  /* the GraphQL server endpoint */
  httpLink,
  cache,
})
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Search />
      {element}
    </>
  )
}
