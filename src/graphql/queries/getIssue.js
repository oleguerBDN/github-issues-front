const getIssue = `#graphql
query GetIssue($issueId:ID!) {
  node(id:$issueId) {
   ... on Issue {
        title
  	    state
        bodyHTML
        author{
            login
            url
        }
    }
  }
}`;
export default getIssue;
