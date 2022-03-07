import axios from "axios";
import { getIssues, getSearchQuery } from "../../graphql/queries/getIssues";
import { errorIssuesAction, loadIssuesAction } from "../actions/actionCreators";

export const loadIssuesThunk =
  (params, startCursor, endCursor) => async (dispatch) => {
    try {
      const variables = JSON.stringify({
        searchQuery: getSearchQuery(params),
        startCursor,
        endCursor,
      });
      const {
        data: {
          data: { search },
        },
      } = await axios.post(
        process.env.REACT_APP_API_URL,
        { query: getIssues, variables },
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      dispatch(loadIssuesAction(search));
    } catch (error) {
      dispatch(errorIssuesAction("Something went wrong"));
    }
  };
