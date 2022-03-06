import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cleanIssueAction } from "../redux/actions/actionCreators";
import { loadCommentsThunk, loadIssueThunk } from "../redux/thunks/issueThunks";

const useIssue = () => {
  const dispatch = useDispatch();
  const issue = useSelector((store) => store.issue);

  const loadIssue = useCallback(
    (id) => {
      dispatch(loadIssueThunk(id));
    },
    [dispatch]
  );

  const cleanIssue = useCallback(() => {
    dispatch(cleanIssueAction());
  }, [dispatch]);

  const loadComments = useCallback(
    (id, startCursor = null, endCursor = null) => {
      dispatch(loadCommentsThunk(id, startCursor, endCursor));
    },
    [dispatch]
  );

  return { issue, loadIssue, cleanIssue, loadComments };
};

export default useIssue;
