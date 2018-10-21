import {
  HEROES_LIST, SEARCH_HERO,
} from '../actions/types';

const INITIAL_STATE = {
  heroesList: null,
  searchHero: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case HEROES_LIST:
    return { ...state, heroesList: action.payload };
  case SEARCH_HERO:
    return { ...state, searchHero: action.payload };
  default:
    return state;
  }
};
