import {GET_EXPLORE_DATA} from '../constants';
const initialState = {
  exploreData: [],
};
const ReposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPLORE_DATA:
      return {
        ...state,
        exploreData: action.payload,
      };

    default:
      return state;
  }
};

export default ReposReducer;
