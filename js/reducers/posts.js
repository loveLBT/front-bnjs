import * as types from "../constants/ActionTypes"

const initialState={
	isFetching:false,
}

const posts = (state=initialState,action)=>{
	switch(action.type) {
		case types.REQUEST_POSTS:
			return {
				...state,
				isFetching:true,
			}
		case types.RECEIVE_POSTS:
			return {
				...state,
				isFetching:false,
				[action.postsTitle]:action.posts
			}
		default:
			return state
	}
}
export default posts