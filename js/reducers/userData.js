import * as types from "../constants/ActionTypes"

const initialState={
	isFetching:false,
	userData:""
}

export const userData=(state=initialState,action)=>{
	switch(action.type) {
		case types.REQUEST_POSTS:
			return {
				...state,
				isFetching:true
			}
		case types.RECEIVE_POSTS:
			return {
				...state,
				isFetching:false,
				userData:action.data
			}
		default:
			return state
	}
}
