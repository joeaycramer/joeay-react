import * as actionTypes from './actions';

const initialState = {
	portfolioItems: []
};

const reducer = (state = initialState, action) => {
	
	switch(action.type) {
		case actionTypes.UPDATE_WORK:
			return {
				...state,
				portfolioItems: action.payload
			};

		case actionTypes.UPDATE_SINGLE_WORK:
			let current_state = state,
					taregt_index = action.target_index;

			 let new_list = state.portfolioItems.map( (item, index) => {
						if(index !== action.target_index) {
								// This isn't the item we care about - keep it as-is
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
			}
	}
	return state;
};

export default reducer;