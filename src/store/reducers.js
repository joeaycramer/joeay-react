import * as actionTypes from './actions';

const initialState = {
	portfolioItems: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.GET_WORK:
			// if 
			console.log('its the work action');
			return {
				...state,
				portfolioItems: action.payload
			};
			break;
	}
	return state;
};

export default reducer;