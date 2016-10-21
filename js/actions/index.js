import * as types from "../constants/ActionTypes"
import fetch from "isomorphic-fetch"


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
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(postsTitle, json)))
}

