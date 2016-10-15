import { combineReducers } from 'redux'
import {userData} from './userData'

const reducers={
	userData
}

const rootReducer=combineReducers({
	...reducers
})

export default rootReducer;