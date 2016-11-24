export default function userdetails(state={
    user:{
        name:"null",
        userid:"null"
    },
    fetching:false,
}, action){
    switch (action.type){
        case "USERDETAILS":
        {
            return {...state, fetching: action.payload}
        }

        case "assad":
        {
            return Object.assign({}, state, action.payload);
        }
        default:
        	return state;
    }

    //return state;
}
