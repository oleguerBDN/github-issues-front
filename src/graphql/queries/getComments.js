const getComments = `#graphql
query($id: ID!, $startCursor:String, $endCursor:String) {
  node(id: $id) {
   ... on Issue {
    comments (first:5,  before:$startCursor, after:$endCursor){
      pageInfo{
        endCursor,
        startCursor, 
        hasNextPage,
        hasPreviousPage
      }
      edges {
        node {
          id,
          author{
          login,
          url
          },
          bodyHTML
        }
      }
    }
    
      
    }
  }
}
`;

export default getComments;
