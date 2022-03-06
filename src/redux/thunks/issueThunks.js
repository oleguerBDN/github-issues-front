import axios from "axios";
import getComments from "../../graphql/queries/getComments";
import getIssue from "../../graphql/queries/getIssue";
import {
  errorIssueAction,
  loadCommentsAction,
  loadIssueAction,
} from "../actions/actionCreators";

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

export const loadCommentsThunk =
  (id, startCursor, endCursor) => async (dispatch) => {
    try {
      let first,
        last = null;
      if (startCursor) {
        last = 5;
      } else {
        first = 5;
      }

      const variables = JSON.stringify({
        issueId: id,
        startCursor,
        endCursor,
        first,
        last,
      });
      const {
        data: { errors, data },
      } = await axios.post(
        process.env.REACT_APP_API_URL,
        { query: getComments, variables },
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      if (errors) {
        throw new Error();
      } else {
        dispatch(loadCommentsAction(data.node.comments));
      }
    } catch (error) {
      dispatch(errorIssueAction("Something went wrong"));
    }
  };
