import {
  TOGGLE_PLAY,
  TOGGLE_VOLUME,
  SET_TIME,
  ON_LOAD,
  ON_SLIDING_START,
  ON_SLIDING_CHANGE,
  ON_SLIDING_COMPLETE,
  ON_END
} from '../share/types';

const INIT_STATE = {
  playing: true,
  muted: false,
  sliding: false,
  currentTime: 0,
  songIndex: 0
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PLAY:
      return ({ ...state, playing: !action.payload });
    case TOGGLE_VOLUME:
      return ({ ...state, muted: !action.payload });
    case SET_TIME:
      return ({ ...state, currentTime: action.payload.currentTime });
    case ON_LOAD:
      return ({ ...state, songDuration: action.payload.duration });
    case ON_SLIDING_START:
      return ({ ...state, sliding: true });
    case ON_SLIDING_CHANGE: {
      let newPosition = action.payload * state.songDuration;
      return ({ ...state, currentTime: newPosition });
    }
    case ON_SLIDING_COMPLETE:
      return ({ ...state, sliding: false });
    case ON_END:
      return ({ ...state });
    default:
      return state;
  }
};
