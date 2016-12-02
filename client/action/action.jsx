
import * as user from '../action/action.jsx';
var firebase = require('firebase');
import firebase_details from '../Firebase/Firebase';


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
            Userid:Userid
        }
    }
}

export function  FetchAllPublishedproduct() {
    return function (dispatch) {
        var groupid = [];
        firebase.database().ref('Product_creation').orderByChild('ProductId').on("value", (snapshot) => {

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
                        });
                    });
                    dispatch({
                        type: "ALLPRODUCTDETAILS",
                        payload: {
                            products : productallid
                        }
                    })
                });
            }

        });

    }
}


export default user;

