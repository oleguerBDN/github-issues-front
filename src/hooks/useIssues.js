import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadIssuesThunk } from "../redux/thunks/issuesThunks";

const useIssues = () => {
  const dispatch = useDispatch();
  const issues = useSelector((store) => store.issues);
  const loadIssues = useCallback(
    (params, startCursor = null, endCursor = null) => {
      dispatch(loadIssuesThunk(params, startCursor, endCursor));
    },
    [dispatch]
  );

  return { issues, loadIssues };
};

export default useIssues;
