import React, { Component } from 'react';
var Loading = require('react-loading');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Itemview from './Itemview.jsx';
import { fetchuserdetails, productCoreDetails, Description, ProductSidebar, currentproductstore, ProductComments, productSellerandstripeid} from '../../action/action.jsx'

   function mapDispatchToProps(dispatch) {
        return bindActionCreators({
                fetchuserdetails,
                productCoreDetails,
                Description,
                ProductSidebar,
                currentproductstore,
                ProductComments,
                productSellerandstripeid
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
            ProductId:'',
            ProductSidebar:[],
        };

    }

    componentWillMount(){

        var ProductId = this.props.params.productid;

        this.setState({
            ProductId: ProductId
        });

        this.props.currentproductstore(ProductId);
        // this.props.ProductSidebar(ProductId);
        this.props.Description(ProductId);
        this.props.productCoreDetails(ProductId);
        this.props.ProductComments(ProductId);
        this.props.productSellerandstripeid(ProductId);

    }

    componentDidMount() {

        var ProductId = this.state.ProductId;

        var ProductSidebar = [];
        firebase.database().ref('ProductSidebar').orderByChild('Productid').equalTo(ProductId).on("child_added", (snapshot) => {

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
        var productobject = Object.keys(productdetails).map(key => productdetails[key]);
        var productcoredetails = [].concat.apply([], productobject);

        var prductdescription = this.props.userdetails.Description;
        var descriptionobject = Object.keys(prductdescription).map(key => prductdescription[key]);
        var descriptiondetails = [].concat.apply([], descriptionobject);

        // var Productsidebarobject = this.props.userdetails.Productsidebar;
        // var sidebarobject = Object.keys(Productsidebarobject).map(key => Productsidebarobject[key]);
        // var sidebardetails = [].concat.apply([], sidebarobject);

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
                             ProductId={this.state.ProductId}
                             Comments = {allcomment}
                             sellerStripeAccountId={this.props.userdetails.stripeuserid}
                    />
                </div>
            )
        }

    }
}

export default ItemPreview ;



