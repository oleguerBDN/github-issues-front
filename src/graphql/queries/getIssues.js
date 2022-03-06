const getIssues = `#graphql
query GetIssues($searchQuery:String!){
    search(query:$searchQuery , type: ISSUE, first:20 ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
        node{ ... on Issue {
        id 
        title
        author{
            login
            url
            }
    }}
    }
  }
}
`;

const getSearchQuery = (params) => {
  let searchQueryString = "repo:facebook/react is:issue";

  if (params.status === "OPEN" || params.status === "CLOSED") {
    searchQueryString += " is:" + params.status;
  }

  if (params.searchText && params.searchText !== "") {
    searchQueryString += ` (in:title ${params.searchText} OR in:body ${params.searchText})`;
  }

  return searchQueryString;
};

export { getIssues, getSearchQuery };
