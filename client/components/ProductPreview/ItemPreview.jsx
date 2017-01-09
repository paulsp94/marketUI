import React, { Component } from 'react';
var Loading = require('react-loading');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var firebase = require('firebase');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Sidebar from '../ProductPreview/Sidebar.jsx';
import Itemview from './Itemview.jsx';
import { fetchuserdetails, productCoreDetails, Description, ProductSidebar, currentproductstore, ProductComments,
//     productSellerandstripeid
} from '../../action/action.jsx';

   function mapDispatchToProps(dispatch) {
        return bindActionCreators({
                fetchuserdetails,
                productCoreDetails,
                Description,
                ProductSidebar,
                currentproductstore,
                ProductComments,
                // productSellerandstripeid
            }, dispatch);
    }

   function mapStateToProps(store) {
        return { userdetails: store.userdetails };
    }

@connect(mapStateToProps, mapDispatchToProps)

class  ItemPreview extends Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
             Productid:'',
            ProductSidebar:[],
        };

    }

    componentWillMount(){

        var  Productid = this.props.params.productid;

        this.setState({
             Productid:  Productid
        });

        this.props.currentproductstore( Productid);
        // this.props.ProductSidebar( Productid);
        this.props.Description( Productid);
        this.props.productCoreDetails( Productid);
        this.props.ProductComments( Productid);
        // this.props.productSellerandstripeid( Productid);

    }

    componentDidMount() {

        var  Productid = this.state. Productid;

        var ProductSidebar = [];
        firebase.database().ref('ProductSidebar').orderByChild('Productid').equalTo( Productid).on("child_added", (snapshot) => {

                ProductSidebar.push({
                    IntegrationTime: snapshot.val().IntegrationTime,
                    Packages: snapshot.val().Packages,
                    compatibility: snapshot.val().compatibility,
                    complexity: snapshot.val().complexity,
                    tags: snapshot.val().tags,
                });

            this.setState({
                ProductSidebar
            })

        });

    }


    render(){

        var productdetails = this.props.userdetails.Productcoredetails;


        var prductdescription = this.props.userdetails.Description;

        {/*
        var Productsidebarobject = this.props.userdetails.Productsidebar;
        var sidebarobject = Object.keys(Productsidebarobject).map(key => Productsidebarobject[key]);
        var sidebardetails = [].concat.apply([], sidebarobject);
        */}

        var Productsidebarobject = this.state.ProductSidebar;


        if(productdetails == false || prductdescription == false || Productsidebarobject == ''){
            return(
                <div className="background">
                <div className="loader">
                    <Loading type='spin' color='#000000' />
                </div>
                </div>
            )
        }
        else {
            var productobject = Object.keys(productdetails).map(key => productdetails[key]);
            var productcoredetails = [].concat.apply([], productobject);

            var descriptionobject = Object.keys(prductdescription).map(key => prductdescription[key]);
            var descriptiondetails = [].concat.apply([], descriptionobject);

            var productcorealldetails = productcoredetails[0];
            var productdesdetail = descriptiondetails[0];
            var prodsidebardet = Productsidebarobject[0];
            var allcomment = this.props.userdetails.allcomments ? this.props.userdetails.allcomments.productcomment : [];

            return (
                <div className="background">
                    <Itemview productcoredetails = {productcorealldetails} Description = {productdesdetail}/>
                    <Sidebar productcoredetails={productcorealldetails}
                             Description={productdesdetail}
                             Sidebar={prodsidebardet}
                              Productid={this.state. Productid}
                             Comments = {allcomment}
                             sellerStripeAccountId={this.props.userdetails.stripeuserid}
                    />
                </div>
            )
        }

    }
}

export default ItemPreview ;



