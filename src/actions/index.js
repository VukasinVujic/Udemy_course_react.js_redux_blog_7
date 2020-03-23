import jsonPlaceholder from '../apis/jsonPlaceholder'


export const fetchPosts =  () => {

    // return async function(dispatch, getState){
    //     const response = await jsonPlaceholder.get('/posts');
    // }
    // up longer, down short
    return async dispatch => { const response = await jsonPlaceholder.get('/posts'); 
    
    dispatch({type: "FETCH_POSTS", payload: response.data })

    };
        // up short, down longer
        // return {
        //     type: "FETCH_POSTS",
        //     payload: response
        // };
};