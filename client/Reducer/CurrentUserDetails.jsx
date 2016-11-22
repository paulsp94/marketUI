export default function userdetails(state=null, action){
    console.log(action.type);
    switch (action.type){
        case "USERDETAILS":{
            console.log(action.payload);
            return action.payload;
        }
    }

    return state;
}
