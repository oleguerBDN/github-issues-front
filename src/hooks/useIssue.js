import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cleanIssueAction } from "../redux/actions/actionCreators";
import { loadIssueThunk } from "../redux/thunks/issueThunks";

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

  return { issue, loadIssue, cleanIssue };
};

export default useIssue;
