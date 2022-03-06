import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Issue from "../components/Issue/Issue";
import useIssue from "../hooks/useIssue";

const IssueDetailPage = () => {
  const { issue, loadIssue, cleanIssue } = useIssue();
  const { id } = useParams();

  useEffect(() => {
    const cleanUp = () => cleanIssue();
    loadIssue(id);
    return cleanUp;
  }, [id, loadIssue, cleanIssue]);

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
    </>
  );
};

export default IssueDetailPage;
