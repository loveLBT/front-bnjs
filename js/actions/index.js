import * as types from "../constants/ActionTypes"
import 'whatwg-fetch'


export const requestPosts = (postsTitle) => ({
  type: types.REQUEST_POSTS,
  postsTitle
})

export const receivePosts = (postsTitle, json) => ({
  type: types.RECEIVE_POSTS,
  postsTitle,
  posts: json.result
})

export const fetchPosts = (postsTitle,url) => dispatch => {
  dispatch(requestPosts(postsTitle))
  return fetch(url,{
  	  headers:{
  	  	'Cookie':'ASP.NET_SessionId=1i2lk5osm53kmbbroctyjsor'
  	  },
	  credentials: 'include'
	})
    .then(response => response.json())
    .then(json => dispatch(receivePosts(postsTitle, json)))
}

