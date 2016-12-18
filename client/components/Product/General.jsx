import React, { Component } from 'react';
var Loading = require('react-loading');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ReactMarkdown from 'react-markdown';
import GeneralProfile from './GeneralProfile.jsx';
import Sidebar from './Sidebar.jsx';
import './Product.css';
import Descriptionpage from './Description.jsx';
import Content from './Content.jsx';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import { productEditValidationDetails,productCoreDetails ,Description , ProductSidebar, ProductContent} from '../../action/action.jsx';

function mapStateToProps(store) {
    return { userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        productEditValidationDetails,
        productCoreDetails,
        Description,
        ProductSidebar,
        ProductContent
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class  General extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            ProductID:'',
            producteditvalidation:false,
        };
    }


    checkvalidation(productid){

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

                        this.setState({
                            producteditvalidation:"WRONGVALIDATION"
                        })
                    }

                    else{

                        var tableproductid = currentvaluearray.ProductId;
                        var tableuserid = currentvaluearray.userid;

                        if(tableproductid == productid){

                            if(tableuserid == currentUserid){

                                this.setState({
                                    producteditvalidation : "RIGHTVALIDATION"
                                })

                                break;
                            }
                        }
                    }
                }
            }
            else{
                this.setState({
                    producteditvalidation:"WRONGVALIDATION"
                })
            }

        });


    }

    componentWillMount(){

        var ProductId = this.props.params.productid;

        if(ProductId == '' || ProductId == undefined){
            var ProductId = firebase.database().ref("ProductCoreDetails").push().key;
            this.setState({
                ProductID: ProductId
            });
            this.checkvalidation(ProductId);
        }
        else {
            this.checkvalidation(ProductId);

            this.setState({
                ProductID: ProductId
            });

        }
    }

    render(){

        if(this.state.producteditvalidation == false){
            return (
            <div className="background">
                <div className="loader">
                    <Loading type='spin' color='#000000' />
                </div>
            </div>
            )
        }

        else {

                return (
                    <div className="">
                        <div className="" style={{backgroundColor: "#efeadd", paddingBottom: "0.5%"}}>
                            <Tabs>

                                <Tab label="General">
                                    <div>
                                        <GeneralProfile ProductId={this.state.ProductID} validation = {this.state.producteditvalidation} />
                                    </div>
                                </Tab>

                                <Tab label="Descriptions">
                                    <Descriptionpage ProductId={this.state.ProductID} validation = {this.state.producteditvalidation}/>
                                </Tab>

                                <Tab label="Content">
                                    <Content ProductId={this.state.ProductID} validation = {this.state.producteditvalidation}/>
                                </Tab>

                                <Tab label="Sidebar">
                                    <Sidebar ProductId={this.state.ProductID} validation = {this.state.producteditvalidation}/>
                                </Tab>

                            </Tabs>
                        </div>
                    </div>
                )
        }
    }
}

export default General;