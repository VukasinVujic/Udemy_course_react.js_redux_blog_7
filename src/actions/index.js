import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'


export const fetchPostsUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
}


export const fetchPosts =  () => async (dispatch) => { 
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

/*************  Memoize Version one
export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch); // one function lala***
// normal version down , short up
// {    _fetchUser(id, dispatch);}

const _fetchUser = _.memoize(async (id, dispatch) => { // lala*** is callling this function
    const response = await jsonPlaceholder.get(`users/${id}`)
        
    dispatch({type: "FETCH_USER", payload: response.data})

});
*/

export const fetchUser = (id) => async dispatch => {

    const response = await jsonPlaceholder.get(`users/${id}`);
        
    dispatch({type: "FETCH_USER", payload: response.data});

};