import * as user from '../action/action.jsx';
var firebase = require('firebase');
import firebase_details from '../Firebase/Firebase';

var productid = [];

export function fetchuserdetails (){
    return {
        type:"USERDETAILS",
        payload:{
            name:"komaldeep13",
            userid:"1234535"
        }
    }
}

export function currentuserdetails (){
    var user = firebase.auth().currentUser;
    var Userid = user.uid;
    return {
        type:"CURRENTUSERDETAILS",
        payload:{
            Userid:Userid
        }
    }
}

export function changepassword (newpassword){
    return function (dispatch) {
        var user = firebase.auth().currentUser;
        user.updatePassword(newpassword).then(function() {
            dispatch ({
                type: "CHANGEPASSWORDETAILS",
                payload: {
                    password: "Changed Successfully"
                }
            })
        }, function(error) {
            dispatch ({
                type: "CHANGEPASSWORDETAILS",
                payload: {
                    password: error
                }
            })
        });
    }
}

export function changeemaildetails (newemail){
    return function (dispatch) {
        var user = firebase.auth().currentUser;
        user.updateEmail(newemail).then(function() {
            dispatch ({
                type: "CHANGEEMAIL",
                payload: {
                    Email: "Changed Successfully"
                }
            })
        }, function(error) {
            dispatch ({
                type: "CHANGEEMAIL",
                payload: {
                    Email: error
                }
            })
        });
    }
}

export function currentuserid (){
    var user = firebase.auth().currentUser;
    var Userid = user.uid;
    return {
        type:"USERID",
        payload:{
            Userid
        }
    }
}

export function  FetchAllPublishedproduct() {
    return function (dispatch) {
        var groupid = [];
        var productallid = [];
        firebase.database().ref('Publishedproduct').orderByChild('ProductId').on("child_added", (snapshot) => {

            var groupid = snapshot.val().Productid;
            var currentproductid = groupid;

            firebase.database().ref('ProductCoreDetails').orderByChild('ProductId').equalTo(currentproductid).on("child_added", (snapshot) => {
              let product = snapshot.val();
              if(product.status === 'published') {
                productallid.push({
                  productid: product.ProductId,
                  Price: product.Price,
                  Description: product.Description,
                  Mainimage: product.mainImage,
                  Title: product.Title,
                  Subimage: product.subImage,
                  rating: product.rating,
                  downloadCount: product.downloadCount,
                  category: product.category,
                  category: product.category,
                    datenumber:product.datenumber,
                });

                dispatch({
                  type: "ALLPRODUCTDETAILS",
                  payload: {
                    products : productallid
                  }
                })
              }
            });
        });
    }
}

export function currentproductstore (currentproductvalue){

    productid.push(currentproductvalue);

    var length =  productid.length;
    var currentproductid = length - 1;

    if(productid.length > 1){
        productid = productid.slice(currentproductid,length);
    }

    return {
        type:"CURRENTPRODUCTIDSTORE",
        payload:{
            Productid: productid
        }
    }
}

export function  productCoreDetails(productid) {
    return function (dispatch) {
        var productcoredetails = [];
        firebase.database().ref('ProductCoreDetails').orderByChild('ProductId').equalTo(productid).on("value", (snapshot) => {

            snapshot.forEach((data123) => {
                productcoredetails.push({
                    productid: data123.val().ProductId,
                    Price: data123.val().Price,
                    Description: data123.val().Description,
                    Mainimage: data123.val().mainImage,
                    Title: data123.val().Title,
                    Subimage: data123.val().subImage,
                    SubTitle: data123.val().Subtitle,
                    category:data123.val().category,
                    downloadCount:data123.val().downloadCount,
                    rating: data123.val().rating,
                    date:data123.val().date
                });
            });

            dispatch({
                type: "PRODUCTCOREDETAILS",
                payload: {
                    productcoredetail : productcoredetails
                }
            })
        });
    }
}

export function  Description(productid) {
    return function (dispatch) {
        var Description = [];
        firebase.database().ref('Description').orderByChild('ProductId').equalTo(productid).on("value", (snapshot) => {
            snapshot.forEach((data123) => {
                Description.push({
                    Description: data123.val().textfieldvalue1,
                });
            });

            dispatch({
                type: "DESCRIPTION",
                payload: {
                    Description : Description
                }
            })
        });
    }
}

export function  ProductSidebar(productid) {
    return function (dispatch) {
        var ProductSidebar = [];
        firebase.database().ref('ProductSidebar').orderByChild('Productid').equalTo(productid).on("value", (snapshot) => {
            snapshot.forEach((data123) => {
                ProductSidebar.push({
                    IntegrationTime: data123.val().IntegrationTime,
                    Packages: data123.val().Packages,
                    compatibility: data123.val().compatibility,
                    complexity: data123.val().complexity,
                    tags: data123.val().tags,
                });
            });


            dispatch({
                type: "PRODUCTSIDEBAR",
                payload: {
                    Productsidebar: ProductSidebar
                }
            })
        });
    }
}

export function  ProductContent(productid) {
    return function (dispatch) {

        var Content = [];
        firebase.database().ref('Content').orderByChild('Productid').equalTo(productid).on("value", (snapshot) => {
            snapshot.forEach((data123) => {
                Content.push({
                    Content: data123.val().textfieldvalue1,
                });
            });

            dispatch ({
                type: "CONTENT",
                payload: {
                    Content: Content
                }
            })
        });

    }
}

export function  UserCreatedProduct() {

    var user = firebase.auth().currentUser;
    var Userid = user.uid;

    return function (dispatch) {
        var groupid = [];
        firebase.database().ref('Product_creation').orderByChild('userid').equalTo(Userid).on("value", (snapshot) => {

            snapshot.forEach((data12) => {
                groupid.push({
                    productid: data12.val().ProductId
                });
            });


            if(groupid == ''){

                dispatch({
                    type: "USERCREATEPRODUCTS",
                    payload: {
                        productallid: "No User Created Product"
                    }
                });

            }
            else {

                var productallid = [];
                for (var i = 0; i < groupid.length; i++) {

                    var currentproductid = groupid[i].productid;

                    firebase.database().ref('ProductCoreDetails').orderByChild('ProductId').equalTo(currentproductid).on("value", (snapshot) => {
                        snapshot.forEach((data123) => {
                            productallid.push({
                                productid: data123.val().ProductId,
                                Price: data123.val().Price,
                                Description: data123.val().Description,
                                Mainimage: data123.val().mainImage,
                                Title: data123.val().Title,
                                Subimage: data123.val().subImage,
                            });
                        });

                        dispatch({
                            type: "USERCREATEPRODUCTS",
                            payload: {
                                productallid
                            }
                        })
                    });
                }

            }

        });

    }
}

export function EnternewComment(Comment,ProductId,name){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; // January is 0!
    var yyyy = today.getFullYear();
    var datenumber = today.getTime();
    var minutes = today.getMinutes();
    var Hours= today.getHours();

    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }

    var today = mm+'/'+dd+'/'+yyyy+'    '+ Hours+':'+minutes ;

    var newData = {
        ProductId :ProductId,
        Username: name,
        Comment: Comment,
        date:today,
        datenumber:datenumber,
    }

    firebase.database().ref("Products_User_Comments/"+ProductId).push(newData);

    return {
        type:"WRITECOMMENT",
        payload:{
            Comment:"Successfully"
        }
    }
}

export function  ProductComments(Productid) {

    return function (dispatch) {
        var productcomment = [];
        firebase.database().ref('Products_User_Comments/'+Productid).on("value", (snapshot) => {

            snapshot.forEach((data12) => {
                productcomment.push({
                    productid: data12.val().ProductId,
                    Comment: data12.val().Comment,
                    Username:data12.val().Username,
                    date:data12.val().date,
                    datenumber:data12.val().datenumber,
                });
            });

            dispatch({
                type: "PRODUCTSCOMMENT",
                payload: {
                    productcomment
                }
            });
        });

    }
}

export function  submitProductGeneralDetails(ProductId,title,subtitle,describtion,price,category,url,url1,UserId) {

    return function (dispatch) {
        firebase.database().ref('ProductCoreDetails/' + ProductId).set({
            ProductId: ProductId,
            Title: title,
            Subtitle: subtitle,
            Description: describtion,
            Price: price,
            mainImage: url,
            subImage: url1,
            category:category,
            status: 'submitted'
        });

        firebase.database().ref("Product_creation/" + ProductId).set({
            ProductId: ProductId,
            userid: UserId[0],
        });

        dispatch({
            type: "SUBMITPRODUCTCOREDETAILS",
            payload: {
                submitDetails:"Details are submitted"
            }
        })

    }
}

export function  submitProductsidebarDetails(packages, complexity, integrationTime, compatibility, tags, ProductId) {

    return function (dispatch) {
        firebase.database().ref("ProductSidebar/" + ProductId).set({
            Packages: packages,
            complexity: complexity,
            IntegrationTime: integrationTime,
            compatibility: compatibility,
            tags: tags,
            Productid: ProductId,
        });

        dispatch({
            type: "SUBMITPRODUCTCONTENTDETAILS",
            payload: {
                submitDetails: "Details are submitted"
            }
        })
    }
}

export function  submitPublishedproducts(ProductId, UserId) {

    return function (dispatch) {
        firebase.database().ref('ProductCoreDetails').child(ProductId).once("value", function (snapshot) {
            if (snapshot.exists()) {
                firebase.database().ref('Description').child(ProductId).once("value", function (snapshot) {
                    if (snapshot.exists()) {

                        firebase.database().ref('Content').child(ProductId).once("value", function (snapshot) {
                            if (snapshot.exists()) {

                                firebase.database().ref('ProductSidebar').child(ProductId).once("value", function (snapshot) {
                                    if (snapshot.exists()) {

                                        firebase.database().ref("Publishedproduct/" + ProductId).set({
                                            Productid: ProductId,
                                            UserId: UserId,
                                        });

                                        dispatch({
                                            type: "SUBMITPUBLISHEDPRODUCTS",
                                            payload: {
                                                submitDetails: "Your product is now pre-published! We will review it soon."
                                            }
                                        })
                                    }
                                    else {
                                        dispatch({
                                            type: "SUBMITPUBLISHEDPRODUCTS",
                                            payload: {
                                                submitDetails: "Error: Sidebar TAB not saved/complete"
                                            }
                                        })
                                    }
                                })
                            }
                            else {
                                dispatch({
                                    type: "SUBMITPUBLISHEDPRODUCTS",
                                    payload: {
                                        submitDetails: "Error: Content TAB not saved/complete"
                                    }
                                })

                            }
                        });
                    }
                    else {
                        dispatch({
                            type: "SUBMITPUBLISHEDPRODUCTS",
                            payload: {
                                submitDetails: "Error: Description TAB not saved/complete"
                            }
                        })
                    }
                });
            }
            else {
                dispatch({
                    type: "SUBMITPUBLISHEDPRODUCTS",
                    payload: {
                        submitDetails: "Error: General TAB not saved/complete"
                    }
                })
            }
        });
    }
}

export function  FetchAllCurrentUserproduct() {

    return function (dispatch) {
        var user = firebase.auth().currentUser;
        var Userid = user.uid;
        var groupid = [];
        var productallid = [];
        firebase.database().ref('Product_creation').orderByChild('userid').equalTo(Userid).on("child_added", (snapshot) => {

            var groupid = snapshot.val().ProductId;
            var currentproductid = groupid;

            firebase.database().ref('ProductCoreDetails').orderByChild('ProductId').equalTo(currentproductid).on("child_added", (snapshot) => {

                productallid.push({
                    productid: snapshot.val().ProductId,
                    Price: snapshot.val().Price,
                    Description: snapshot.val().Description,
                    Title: snapshot.val().Title,
                    Subimage: snapshot.val().subImage,
                });

                dispatch({
                    type: "CURRENTUSERPERSONALPRODUCTS",
                    payload: {
                        products : productallid
                    }
                })
            });
        });
    }
}

export function  productEditValidationDetails(productid) {
    return function (dispatch) {

        var user = firebase.auth().currentUser;
        var currentUserid = user.uid;
        var query = firebase.database().ref('Product_creation');

        query.once("value", (snapshot) => {
            if(snapshot.exists()){

                var myObj = snapshot.val();
                var arr =[];
                for( var i in myObj ) {
                    if (myObj.hasOwnProperty(i)){
                        arr.push(myObj[i]);
                    }
                }

                for(var i = 0; i< arr.length+1; i++){
                    var currentvaluearray = arr[i];
                    if(i == arr.length){
                            dispatch({
                                type: "EDITVALIDATION",
                                payload: {
                                    producteditvalidation : "WRONGVALIDATION"
                                }
                            })
                    } else {

                        var tableproductid = currentvaluearray.ProductId;
                        var tableuserid = currentvaluearray.userid;

                        if(tableproductid == productid){
                            if(tableuserid == currentUserid){
                                dispatch({
                                    type: "EDITVALIDATION",
                                    payload: {
                                        producteditvalidation : "RIGHTVALIDATION"
                                    }
                                })

                                break;
                            }
                        }
                    }
                }
            }
            else{
                dispatch({
                    type: "EDITVALIDATION",
                    payload: {
                        producteditvalidation : "WRONGVALIDATION"
                    }
                })
            }

        });
    }
}

export function  productSellerandstripeid(productid) {
    return function (dispatch) {
        firebase.database().ref(`Publishedproduct/${productid}`).once('value').then((snapshot) => {
          if(snapshot.val()) {
            let sellerId = snapshot.val().UserId;

            firebase.database().ref(`Users`).once('value').then((response) => {
              let sellers = response.val();
              Object.keys(sellers).forEach(function (key) {
                let seller = sellers[key];
                if (seller.UserId === sellerId) {
                  dispatch({
                    type: "STRIPEUSERID",
                    payload: {
                      stripeuserid: seller.stripe_user_id,
                      productownerid: sellerId
                    }
                  })
                }
              });
            })
          }
        });
    }
}

export function  UserDownloadedProduct() {

    var user = firebase.auth().currentUser;
    var Userid = user.uid;

    return function (dispatch) {
        var productalldeatils = [];
        firebase.database().ref('sales').orderByChild('buyerId').equalTo(Userid).on("child_added", (snapshot) => {

            var productid = snapshot.val().productId;

            firebase.database().ref('ProductCoreDetails').orderByChild('ProductId').equalTo(productid).on("child_added", (snapshot) => {


                productalldeatils.push({
                        productid: snapshot.val().ProductId,
                        Mainimage: snapshot.val().mainImage,
                        Title: snapshot.val().Title,
                        Subimage: snapshot.val().subImage,
                    });

                dispatch({
                    type: "USERDOWNLOADEDPRODUCTS",
                    payload: {
                        productalldeatils:productalldeatils
                    }
                })
            });

        });

    }
}


export default user;
