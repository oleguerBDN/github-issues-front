const getComments = `#graphql
query($issueId: ID!, $startCursor:String, $endCursor:String, $first:Int, $last:Int ) {
  node(id: $issueId) {
   ... on Issue {
    comments (first:$first, last:$last,  before:$startCursor, after:$endCursor){
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
