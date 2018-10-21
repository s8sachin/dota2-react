import axios from 'axios';
import { HEROES_LIST, SEARCH_HERO } from './types';

const ODOTA_BASE_URL = 'https://api.opendota.com/api'

export const getHeroesListAction = () => (
  (dispatch) => {
    axios({ method: 'GET', url: `${ODOTA_BASE_URL}/heroes` })
    .then((res) => {
      const { data } = res;
      dispatch({ type: HEROES_LIST, payload: data });
    });
  }
);

export const searchHeroesAction = heroName => (
  (dispatch) => {
    dispatch({ type: SEARCH_HERO, payload: heroName });
  }
);