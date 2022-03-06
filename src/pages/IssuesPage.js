import { useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Form from "../components/Form/Form";
import Pagination from "../components/Pagination/Pagination";
import ShortIssue from "../components/ShortIssue/ShortIssue";
import useIssues from "../hooks/useIssues";

const IssuesPage = () => {
  const { issues, loadIssues } = useIssues();
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();

  const onSubmitForm = (formData) => {
    setSearch(formData);
    loadIssues(formData);
  };

  const existingFormData = useMemo(
    () => ({
      searchText: search.get("searchText") || "",
      status: search.get("status") || "OPEN",
    }),
    [search]
  );

  useEffect(() => {
    loadIssues(existingFormData);
  }, [loadIssues, existingFormData]);

  const onClickIssue = (id) => {
    navigate("/issue/" + id);
  };

  const onClickPrevious = () => {
    console.log("Previous clicked");
  };

  const onClickNext = () => {
    console.log("Next clicked");
  };

  return (
    <>
      <Form onSubmit={onSubmitForm} existingFormData={existingFormData} />
      {issues.isError ? (
        <p>{issues.errorMessage}</p>
      ) : issues.edges ? (
        issues.edges.map(({ node: { id, title, author } }) => (
          <ShortIssue
            key={id}
            author={author?.login}
            authorUrl={author?.url}
            title={title}
            id={id}
            onClick={onClickIssue}
          />
        ))
      ) : (
        <p>LOADING...</p>
      )}
      {issues.pageInfo && (
        <Pagination
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          pageInfo={issues.pageInfo}
        />
      )}
    </>
  );
};

export default IssuesPage;
