import { combineReducers } from 'redux'
import posts from './posts'

const reducers={
	posts,
}

const rootReducer=combineReducers({
	...reducers
})

export default rootReducer;