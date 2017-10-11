import {
  TOGGLE_PLAY,
  TOGGLE_VOLUME,
  SET_TIME,
  ON_LOAD,
  ON_SLIDING_START,
  ON_SLIDING_CHANGE,
  ON_SLIDING_COMPLETE,
  ON_END
} from "../share/types";

export const togglePlay = playing => {
  return {
    type: TOGGLE_PLAY,
    payload: playing
  };
};

export const toggleVolume = volume => {
  return {
    type: TOGGLE_VOLUME,
    payload: volume
  };
};

export const setTime = params => {
  return dispatch => {
    dispatch({
      type: SET_TIME,
      payload: params
    });
  };
};

export const onLoad = params => {
  return {
    type: ON_LOAD,
    payload: params
  };
};

export const onSlidingStart = () => {
  return {
    type: ON_SLIDING_START
  };
};

export const onSlidingChange = value => {
  return {
    type: ON_SLIDING_CHANGE,
    payload: value
  };
};

export const onSlidingComplete = value => {
  return {
    type: ON_SLIDING_COMPLETE,
    payload: value
  };
};

export const onEnd = () => {
  return {
    type: ON_END
  };
};
