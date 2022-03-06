import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadIssuesThunk } from "../redux/thunks/issuesThunks";

const useIssues = () => {
  const dispatch = useDispatch();
  const issues = useSelector((store) => store.issues);
  const loadIssues = useCallback(
    (params) => {
      dispatch(loadIssuesThunk(params));
    },
    [dispatch]
  );

  return { issues, loadIssues };
};

export default useIssues;
