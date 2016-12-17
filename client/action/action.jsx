
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

                productallid.push({
                    productid: snapshot.val().ProductId,
                    Price: snapshot.val().Price,
                    Description: snapshot.val().Description,
                    Mainimage: snapshot.val().mainImage,
                    Title: snapshot.val().Title,
                    Subimage: snapshot.val().subImage,
                });

                dispatch({
                    type: "ALLPRODUCTDETAILS",
                    payload: {
                        products : productallid
                    }
                })
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

        var productallid = [];
        for(var i= 0; i < groupid.length;i++) {

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

    });

}
}

export function EnternewComment(Comment,ProductId,name){

    var newData = {
        ProductId :ProductId,
        Username: name,
        Comment: Comment,
    }

    firebase.database().ref("Products_User_Comments").push(newData);

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
        firebase.database().ref('Products_User_Comments').orderByChild('ProductId').equalTo(Productid).on("value", (snapshot) => {

            snapshot.forEach((data12) => {
                productcomment.push({
                    productid: data12.val().ProductId,
                    Comment: data12.val().Comment,
                    Username:data12.val().Username,
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

export function  submitProductGeneralDetails(ProductId,title,subtitle,describtion,price,category,url,url1,UserIdobject,UserId) {

    return function (dispatch) {
        firebase.database().ref('ProductCoreDetails/' + ProductId).set({
            ProductId: ProductId,
            Title: title,
            Subtitle: subtitle,
            Description: describtion,
            Price: price,
            mainImage: url,
            subImage: url1,
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
                                                submitDetails: "Every detail Exist, Your Product is published Now"
                                            }
                                        })
                                    }
                                    else {
                                        dispatch({
                                            type: "SUBMITPUBLISHEDPRODUCTS",
                                            payload: {
                                                submitDetails: "Error: Product Sidebar doesnt exist"
                                            }
                                        })
                                    }
                                })
                            }
                            else {
                                dispatch({
                                    type: "SUBMITPUBLISHEDPRODUCTS",
                                    payload: {
                                        submitDetails: "Error: Product Content doesnt exist"
                                    }
                                })

                            }
                        });
                    }
                    else {
                        dispatch({
                            type: "SUBMITPUBLISHEDPRODUCTS",
                            payload: {
                                submitDetails: "Error: Product Description doesnt exist"
                            }
                        })
                    }
                });
            }
            else {
                dispatch({
                    type: "SUBMITPUBLISHEDPRODUCTS",
                    payload: {
                        submitDetails: "Error: Product General doesnt exist"
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
        firebase.database().ref('Product_creation').orderByChild('ProductId').equalTo(productid).on("child_added", (snapshot) => {
            var Productuserid = snapshot.val().userid;
            var user = firebase.auth().currentUser;
            var currentUserid = user.uid;

            if(currentUserid == Productuserid){
                dispatch({
                    type: "EDITVALIDATION",
                    payload: {
                        producteditvalidation : "RIGHTVALIDATION"
                    }
                })
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

        firebase.database().ref('Publishedproduct').orderByChild('Productid').equalTo(productid).on("child_added", (snapshot) => {

            var Productownerid = snapshot.val().UserId;

            console.log(Productownerid,'PRODUCTOWNERID');

            console.log('1');

                firebase.database().ref('Users').orderByChild('UserId').equalTo(Productownerid).once("child_added", (snapshot) => {

                console.log('2');

                var stripeuserid = snapshot.val().stripe_user_id;

                console.log('stripe id is',stripeuserid,'stripeuserid');

                // dispatch({
                //     type: "STRIPEUSERID",
                //     payload: {
                //         stripeuserid: stripeuserid,
                //         productownerid: Productownerid
                //     }
                // })

             });
        });
    }
}

export default user;

