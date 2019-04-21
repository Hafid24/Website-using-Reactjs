
import axios from 'axios'

export function fetchPosts() {
    return dispatch => {
      return axios.get("/products")
        .then(res => {
          dispatch(fetchPostsSuccess(res.data));
          return res.data;
        }
        )}
        
    }
  


  export const fetchPostsSuccess = posts => ({
    type: "FETCH_POSTS_SUCCESS",
    payload: { posts }
  });