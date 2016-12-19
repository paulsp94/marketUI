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
    productdescriptiondetailssubmitted:false,
    publishedproduct:false,
    currentuserproducts:false,
    validation:false,
    productsellerid:false,
    stripeuserid:false,
    content:false,
    userdownloadetails:false,
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

        case "SUBMITPRODUCTCONTENTDETAILS":
        {
            return {...state, productdescriptiondetailssubmitted: action.payload}
        }

        case "SUBMITPUBLISHEDPRODUCTS":
        {
            return {...state, publishedproduct: action.payload}
        }
        case "CURRENTUSERPERSONALPRODUCTS":
        {
            return {...state, currentuserproducts: action.payload}
        }

        case "EDITVALIDATION":
        {
            return {...state, validation: action.payload}
        }

        case "PRODUCTOWNERID":
        {
            return{...state, productsellerid:action.payload}
        }

        case "STRIPEUSERID":
        {
            return{...state,
              stripeuserid: action.payload.stripeuserid
            }
        }

        case "CONTENT":
        {
            return{...state, content:action.payload}
        }

        case "USERDOWNLOADEDPRODUCTS":
        {
            return{...state, userdownloadetails:action.payload}
        }

        default: return state;

    }
    return state;
}
