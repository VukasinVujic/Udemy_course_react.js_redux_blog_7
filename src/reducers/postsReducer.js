export default (state = [] ,action ) => {
    //    if(action.type ===  'FETCH_POSTS' ){
    //        return action.payload;
    //    }
    //    return state;

    // same thing up and down, down is more common in reducer

    switch(action.type) {
        case 'FETCH_POSTS': 
        return action.payload

        default: return state;
    }
};