export default function userdetails(state={}, action){
    switch (action.type){
        case "USERDETAILS":
            console.log(action.payload);
            return Object.assign({}, state, action.payload);
        default:
        	return state;
    }

    return state;
}
