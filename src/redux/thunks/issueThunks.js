import axios from "axios";
import getIssue from "../../graphql/queries/getIssue";
import { errorIssueAction, loadIssueAction } from "../actions/actionCreators";

export const loadIssueThunk = (id) => async (dispatch) => {
  try {
    const variables = JSON.stringify({ issueId: id });
    const {
      data: { errors, data },
    } = await axios.post(
      process.env.REACT_APP_API_URL,
      { query: getIssue, variables },
      {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
        },
      }
    );
    if (errors) {
      throw new Error();
    } else {
      dispatch(loadIssueAction(data.node));
    }
  } catch (error) {
    dispatch(errorIssueAction("Something went wrong"));
  }
};
