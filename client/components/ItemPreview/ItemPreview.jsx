import React, { Component } from 'react';
var Loading = require('react-loading');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Itemview from './Itemview.jsx';
import { fetchuserdetails, productCoreDetails, Description, ProductSidebar, currentproductstore} from '../../action/action.jsx'



   function mapDispatchToProps(dispatch) {
        return bindActionCreators({
                fetchuserdetails,
                productCoreDetails,
                Description,
                ProductSidebar,
                currentproductstore,
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
        };

    }

    componentWillMount(){

        var ProductId = this.props.params.productid;
        this.props.currentproductstore(ProductId);
        //var Productidobject = this.props.userdetails.Productid;
        //var ProductIdarray = Object.keys(Productidobject).map(key => Productidobject[key]);
        //var ProductId = [].concat.apply([], ProductIdarray);
        //ProductId = ProductId[0];

        this.props.ProductSidebar(ProductId);
        this.props.Description(ProductId);
        this.props.productCoreDetails(ProductId);

        //console.log('this is param value',this.props.params.productid);

    }




    render(){

        var productdetails = this.props.userdetails.Productcoredetails;
        var productobject = Object.keys(productdetails).map(key => productdetails[key]);
        var productcoredetails = [].concat.apply([], productobject);

        var prductdescription = this.props.userdetails.Description;
        var descriptionobject = Object.keys(prductdescription).map(key => prductdescription[key]);
        var descriptiondetails = [].concat.apply([], descriptionobject);

        var Productsidebarobject = this.props.userdetails.Productsidebar;
        var sidebarobject = Object.keys(Productsidebarobject).map(key => Productsidebarobject[key]);
        var sidebardetails = [].concat.apply([], sidebarobject);

        if(productdetails == false || prductdescription == false || Productsidebarobject == false){
            return(
                <div className="background">
                    <Header/>
                <div className="loader">
                    <Loading type='spin' color='#000000' />
                </div>
                </div>
            )
        }
        else {
            var productcorealldetails = productcoredetails[0];
            var productdesdetail = descriptiondetails[0];
            var prodsidebardet = sidebardetails[0];

            return (
                <div className="background">
                    <Header/>
                    <Itemview productcoredetails = {productcorealldetails} Description = {productdesdetail}/>
                    <Sidebar productcoredetails={productcorealldetails} Description={productdesdetail}
                             Sidebar={prodsidebardet}/>
                </div>
            )
        }
    }
}

export default ItemPreview ;



