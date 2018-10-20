import axios from 'axios';
import { HEROES_LIST } from './types';

const ODOTA_BASE_URL = 'https://api.opendota.com/api'

export const getHeroesListAction = employeeName => (
  (dispatch) => {
    axios({ method: 'GET', url: `${ODOTA_BASE_URL}/heroes` })
    .then((res) => {
      const { data } = res;
      // data.userData.map()
      dispatch({ type: HEROES_LIST, payload: data });
    });
  }
);