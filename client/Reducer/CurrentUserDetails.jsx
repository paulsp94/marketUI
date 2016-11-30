export default function userdetails(state={
    user:{},
    fetching:false,
    password:false,
    Email:false,
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

        case "CHANGEPASSWORDETAILS":
        {
            return {...state, password: action.payload}
        }

        case "CHANGEEMAIL":
        {
            return {...state, Email: action.payload}
        }

        default: return state;
    }

    return state;
}
