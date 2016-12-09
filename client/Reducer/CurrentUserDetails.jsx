export default function userdetails(state={
    user:{},
    fetching:false,
    password:false,
    Email:false,
    userid:false,
    Productalldetails:false,
    Productid:false,
    Productcoredetails:false,
    Description:false,
    Productsidebar:false,
    UserCreatedProduct:false,
    productcoredetailssubmitted:false,

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

        case "USERID":
        {
            return {...state, userid: action.payload}
        }

        case "ALLPRODUCTDETAILS":
        {
            return {...state, Productalldetails: action.payload}
        }

        case "CURRENTPRODUCTIDSTORE":
        {
            return {...state, Productid: action.payload}
        }

        case "PRODUCTCOREDETAILS":
        {
            return {...state, Productcoredetails: action.payload}
        }

        case "DESCRIPTION":
        {
            return {...state, Description: action.payload}
        }

        case "PRODUCTSIDEBAR":
        {
            return {...state, Productsidebar: action.payload}
        }

        case "USERCREATEPRODUCTS":
        {
            return {...state, UserCreatedProduct: action.payload}
        }

        case "WRITECOMMENT":
        {
            return {...state, comment: action.payload}
        }

        case "PRODUCTSCOMMENT":
        {
            return {...state, allcomments: action.payload}
        }

        case "SUBMITPRODUCTCOREDETAILS":
        {
            return {...state, productcoredetailssubmitted: action.payload}
        }



        default: return state;
    }

    return state;
}
