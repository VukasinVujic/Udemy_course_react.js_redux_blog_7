import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts =  () => async dispatch => { 
    const response = await jsonPlaceholder.get('/posts'); 
    
    // up short, down longer
    
    // return async function(dispatch, getState){
    //     const response = await jsonPlaceholder.get('/posts');
    // }
      
    dispatch({type: "FETCH_POSTS", payload: response.data })
        // up short, down longer
        // return {
        //     type: "FETCH_POSTS",
        //     payload: response
        // };
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`users/${id}`)
        
    dispatch({type: "FETCH_USER", payload: response.data})
    

}