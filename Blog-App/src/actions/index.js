import axios from 'axios';

const API_KEY = '?key=MahmoudKhaled';
const BASE_URL = `http://reduxblog.herokuapp.com/api/posts`;

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
  const request = axios.get(`${BASE_URL}/${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export function addPost(values, callback) {
  const request = axios.post(`${BASE_URL}/${API_KEY}`, values)
    .then(() => callback());

  return {
    type: ADD_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${BASE_URL}/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${BASE_URL}/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}