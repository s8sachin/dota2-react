import {
  HEROES_LIST,
} from '../actions/types';

const INITIAL_STATE = {
  heroesList: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case HEROES_LIST: 
    return { ...state, heroesList: action.payload };
  default: 
    return state;
  }
};
