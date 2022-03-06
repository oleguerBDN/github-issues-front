import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import Issue from "../components/Issue/Issue";
import Pagination from "../components/Pagination/Pagination";
import useIssue from "../hooks/useIssue";

const IssueDetailPage = () => {
  const { issue, loadIssue, cleanIssue, loadComments } = useIssue();
  const { id } = useParams();

  useEffect(() => {
    const cleanUp = () => cleanIssue();
    loadIssue(id);
    loadComments(id);
    return cleanUp;
  }, [id, loadIssue, cleanIssue, loadComments]);

  const onClickPreviousComment = () => {
    loadComments(id, issue.comments.pageInfo.startCursor, null);
  };

  const onClickNextComment = () => {
    loadComments(id, null, issue.comments.pageInfo.endCursor);
  };

  return (
    <>
      {issue.isError ? (
        <p>{issue.errorMessage}</p>
      ) : issue.title ? (
        <Issue
          author={issue.author?.login}
          authorUrl={issue.author?.url}
          body={issue.bodyHTML}
          state={issue.state}
          title={issue.title}
        />
      ) : (
        <p>LOADING...</p>
      )}
      {!issue.isError &&
        issue.title &&
        issue.comments &&
        issue.comments.edges.map(({ node: { id, author, bodyHTML } }) => (
          <Comment
            key={id}
            body={bodyHTML}
            author={author?.login}
            authorUrl={author?.url}
          />
        ))}
      {issue?.comments && (
        <Pagination
          onClickNext={onClickNextComment}
          onClickPrevious={onClickPreviousComment}
          pageInfo={issue.comments.pageInfo}
        />
      )}
    </>
  );
};

export default IssueDetailPage;
