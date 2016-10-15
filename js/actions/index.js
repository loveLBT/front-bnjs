import * as types from "../constants/ActionTypes"

export const requestPosts = url =>({
	type:types.REQUEST_POSTS,
	url
})

export const receivePosts = json =>({
	type:types.RECEIVE_POSTS,
	data:json.result
})

export const fetchPosts = url => dispatch => {
  dispatch(requestPosts(url))
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}