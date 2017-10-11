import axios from "axios";
import { Actions } from "react-native-router-flux";
import { FETCH_STORY, DONE_FETCH_STORY, SELECT_PART } from "../share/types";
import story from "./testStory";

export const selectStory = id => {
  return dispatch => {
    dispatch({
      type: FETCH_STORY
    });
    const url = `anythings, ${id}`;
    // load parts of the story selected
    // axios.get(url)
    //   .then(response => doneFetchStory(dispatch, response));
    dispatch({
      type: DONE_FETCH_STORY,
      payload: story
    });
    Actions.DetailStory({ id });
  };
};

export const selectPart = part => {
  return {
    type: SELECT_PART,
    payload: part
  };
};
