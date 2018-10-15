import * as actionTypes from './actions';

const initialState = {
	portfolioItems: []
};

const reducer = (state = initialState, action) => {

	switch(action.type) {
		case actionTypes.UPDATE_WORK:
		console.log('payload', action.payload);
			return {
				...state,
				portfolioItems: action.payload
			};
			break;
	}
	return state;
};

export default reducer;