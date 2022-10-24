// import axios from 'axios';
// import axios from 'axios';
import axios from 'axios';
import {GET_EXPLORE_DATA} from '../constants';
export const getDataInRedux = data => ({type: GET_EXPLORE_DATA, payload: data});
export const getExploreData = dispatch => {
  return (dispatch, getState) => {
    axios
      .get('https://api.github.com/search/repositories', {
        params: {
          q: 'created:>2019-01-10',
          sort: 'stars',
          order: 'desc.',
          per_page: 10,
          page: 1,
        },
      })
      .then(response => {
        console.log(JSON.stringify(response));
        dispatch(getDataInRedux(response.data.items));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
