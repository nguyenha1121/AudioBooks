import { FETCH_DATA, DONE_FETCH, FETCH_STORY, DONE_FETCH_STORY, SELECT_PART } from '../share/types';

const INIT_STATE = {
  loading: false,
  data: null,
  loadingStory: false,
  story: null,
  currentSong: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case DONE_FETCH:
      return { ...state, loading: false, data: action.payload };
    case FETCH_STORY:
      return { ...state, loadingStory: true };
    case DONE_FETCH_STORY:
      return { ...state, loadingStory: false, story: action.payload };
    case SELECT_PART:
      return { ...state, currentSong: action.payload };
    default:
      return state;
  }
};
