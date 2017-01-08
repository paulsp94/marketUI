import React, { Component } from 'react';
var Loading = require('react-loading');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from './Sidebar.jsx';
import DataContainer from './DataContainer.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Profile from './Profile.jsx';
import ProfileSidebar from './ProfileSidebar.jsx';
import Content from './Content.jsx';
import ContentSidebar from './ContentSidebar.jsx';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import { currentuserid, UserCreatedProduct, FetchAllCurrentUserproduct, UserDownloadedProduct } from '../../action/action.jsx';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        currentuserid,
        UserCreatedProduct,
        FetchAllCurrentUserproduct,
        UserDownloadedProduct
    }, dispatch);
}

function mapStateToProps(store) {
    return { userdetails: store.userdetails };
}

@connect(mapStateToProps, mapDispatchToProps)

class  Downloads extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
            productname:'',
            profiletab:'',
            Contentdata:'',
            currentProduct:'',
            firstvalue:'',
            Productsidebarid:[],
            productalldeatils:[],
            IntegrationTime:'',
            Packages:[],
            complexity:'',
            compatibility:[],
            tags:[],
            productcomment:[],
            UserDescription:'',
            Usertags:[],
            Useremail:'',

        };
    }

    componentWillMount(){


        var profiletab = 1;
        this.setState({
            profiletab : profiletab,
            firstvalue: "0"
        });

    }

    componentDidMount(){


        var user = firebase.auth().currentUser;
        var Userid = user.uid;

        var productalldeatils = [];
        var productcomment = [];
            firebase.database().ref('sales').orderByChild('buyerId').equalTo(Userid).on("child_added", (snapshot) => {

                var productid = snapshot.val().productId;

                firebase.database().ref('ProductCoreDetails').orderByChild('Productid').equalTo(productid).on("child_added", (snapshot) => {


                    productalldeatils.push({
                        productid: snapshot.val().Productid,
                        Mainimage: snapshot.val().mainImage,
                        Title: snapshot.val().Title,
                        Subimage: snapshot.val().subImage,
                    });


                    var productfirstid = productalldeatils[0].productid


                    firebase.database().ref('Product_creation/'+ productfirstid).once("value", (snapshot) => {

                        var Userid = snapshot.val().userid;

                        firebase.database().ref('ProductOwnerDetails/' + Userid).on("value", (snapshot) => {

                            var Description = snapshot.val().Description;
                            var tags = snapshot.val().tags;
                            var email = snapshot.val().email;

                            this.setState({
                                UserDescription: Description,
                                Usertags: tags,
                                Useremail:email,
                            })
                        });

                    });


                    var productallsidebardeatils = [];
                    firebase.database().ref('ProductSidebar').orderByChild('Productid').equalTo(productfirstid).once("child_added", (snapshot) => {

                        var IntegrationTime= snapshot.val().IntegrationTime;
                        var Packages= snapshot.val().Packages;
                        var compatibility= snapshot.val().compatibility;
                        var complexity= snapshot.val().complexity;
                        var tags= snapshot.val().tags;


                        this.setState({
                            IntegrationTime,
                            Packages,
                            compatibility,
                            complexity,
                            tags
                        })
                    });


                    firebase.database().ref('Products_User_Comments').orderByChild('ProductId').equalTo(productfirstid).on("child_added", (snapshot) => {


                        productcomment.push({
                            productid: snapshot.val().ProductId,
                            Comment: snapshot.val().Comment,
                            Username:snapshot.val().Username,
                        });


                        this.setState({
                            productcomment
                        });

                    });


                    this.setState({
                        productalldeatils:productalldeatils
                    })

                });

            });

    }

    productData(productname){

        var productcomment = [];
        var productalldeatils = [];

        firebase.database().ref('ProductSidebar').orderByChild('Productid').equalTo(productname).once("child_added", (snapshot) => {


            var IntegrationTime= snapshot.val().IntegrationTime;
            var Packages= snapshot.val().Packages;
            var compatibility= snapshot.val().compatibility;
            var complexity= snapshot.val().complexity;
            var tags= snapshot.val().tags;


            this.setState({
                IntegrationTime,
                Packages,
                compatibility,
                complexity,
                tags
            });
        });


        firebase.database().ref('Products_User_Comments').orderByChild('ProductId').equalTo(productname).on("child_added", (snapshot) => {


                productcomment.push({
                    productid: snapshot.val().ProductId,
                    Comment: snapshot.val().Comment,
                    Username: snapshot .val().Username,
                });

            this.setState({
                productcomment
            });

        });


        firebase.database().ref('Product_creation/'+ productname).once("value", (snapshot) => {

            var Userid = snapshot.val().userid;

            firebase.database().ref('ProductOwnerDetails/' + Userid).on("value", (snapshot) => {

                var Description = snapshot.val().Description;
                var tags = snapshot.val().tags;
                var email = snapshot.val().email;

                this.setState({
                    UserDescription: Description,
                    Usertags: tags,
                    Useremail:email,
                })
            });

        });

    }

    productData1(productname){

        for(var i=0; i<productspecificdata.length; i++){
            var productdata = [];
            var specific_data = productspecificdata[i];
            var currentproduct = productspecificdata[i].Productname;
            if(currentproduct == productname){

                var arr =[];
                for( var ij in specific_data ) {
                    if (specific_data.hasOwnProperty(ij)){
                        arr.push(specific_data[ij]);
                    }
                }

                this.setState({
                    productname : arr,
                });
                break;
            }
        }
    }

    Profile(){
        var profiletab = 1;
        this.setState({
            profiletab : profiletab,
        });
    }

    Download(){

        this.props.FetchAllCurrentUserproduct();
        var profiletab = 0;
        this.setState({
            profiletab : profiletab,
        });
    }

    Content(){

        this.props.UserCreatedProduct();

        var profiletab = 2;
        this.setState({
            profiletab : profiletab,
        });
    }

    render(){

        var data = this.state.productalldeatils

        var currentProduct = this.state.Productsidebarid;

        var productspecificdata = this.state.productname;

        var profiletab = this.state.profiletab;


        if(profiletab == '1'){
            var sidebar = <ProfileSidebar/>
        }
        else if(profiletab == '2'){
            var sidebar = <ContentSidebar/>
        }
        else {
            var sidebar = <Sidebar
                IntegrationTime={this.state.IntegrationTime}
                Packages={this.state.Packages}
                compatibility={this.state.compatibility}
                tags={this.state.tags}
                complexity={this.state.complexity}
                productsidebar={currentProduct}
                productcomment={this.state.productcomment}
                UserDescription={this.state.UserDescription}
                Usertags={this.state.Usertags}
                Useremail={this.state.Useremail}
            />
        }

        var Usercreatedproductobject = this.props.userdetails.UserCreatedProduct;

        if(Usercreatedproductobject == false) {
            var Contentdata = <div>
                <div className="loader">
                    <Loading type='spin' color='#000000' />
                </div>
            </div>
        }

        else if(Usercreatedproductobject.productallid == "No User Created Product"){

            var Contentdata =
            <div>
                <Card>
                <p> Some placeholder will be Here</p>
                </Card>
            </div>

        }

        else {
            var Usercreatedproductarray = Object.keys(Usercreatedproductobject).map(key => Usercreatedproductobject[key]);

            var Usercreatedproduct = [].concat.apply([], Usercreatedproductarray);

            var Contentdata =
                <div>
                {
                    Usercreatedproduct.map((detail)=> {
                        return <Content item={detail} ViewItemrateprice = {this.productData.bind(this)}/>
                    })
                }
                </div>;
        }

        return (
            <div className="background">
                        <div className="container">
                        <Card style= {{backgroundColor: "#efeadd", paddingBottom: "2%"}}>
                            <Tabs>
                                <Tab label="Account" onActive={this.Profile.bind(this)}>
                                    <div>
                                       <Profile/>
                                    </div>
                                </Tab>
                               {/* <Tab label="Downloads" onActive={this.Download.bind(this)}>
                                    <div className="TextCard">
                                        {
                                            data.map((detail) => {
                                                return <DataContainer item={detail} ViewItem = {this.productData.bind(this)}/>
                                            })
                                        }
                                    </div>
                                </Tab>
                                */}

                                <Tab label="Content" onActive={this.Content.bind(this)}>
                                    <Card style={{ marginRight: "2%", marginLeft: "2%", marginTop: 9}}>
                                    </Card>
                                    {Contentdata}
                                </Tab>
                            </Tabs>
                            </Card>
                        </div>
                {sidebar}
            </div>
        )
    }
}

export default Downloads;



