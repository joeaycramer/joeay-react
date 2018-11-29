import * as actionTypes from "./actions";
import portfolioDataHelper from "../helpers/portfolioPrismicToReact";

const initialState = {
  portfolioItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_WORK:
      return {
        ...state,
        portfolioItems: action.payload
      };

    case actionTypes.UPDATE_SINGLE_WORK:
      let new_list = state.portfolioItems.map((item, index) => {
        if (index !== action.target_index) {
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...action.item
        };
      });

      return {
        ...state,
        portfolioItems: new_list
      };

    default:
      return {
        ...state
      };
  }
  return state;
};

export default reducer;
