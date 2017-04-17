import { FETCH_DATA, DONE_FETCH, FETCH_STORY, DONE_FETCH_STORY } from '../share/types';
import axios from 'axios';
import data from './testData';
import { Actions } from 'react-native-router-flux';

export const fetchData = (url) => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA });
  //   axios.get(url)
  //     .then(response => doneFetch(dispatch, response));
    doneFetch(dispatch, data); // for test
  };
};

const doneFetch = (dispatch, response) => {
  dispatch({
    type: DONE_FETCH,
    payload: response
  });
};
