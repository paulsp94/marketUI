import React, { Component } from 'react';
var Loading = require('react-loading');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import Product from './Product.jsx';
import Tags from './Tags.jsx';
import { FetchAllPublishedproduct } from '../../action/action.jsx'

function mapStateToProps(store) {
    return { userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        FetchAllPublishedproduct
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class  ProductSearch extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            questdata:[],
            filter:'',
            category:'',
        };
    }

    componentWillMount(){
        this.props.FetchAllPublishedproduct();
    }

    SearchFilter(filter){
        this.setState({
            filter
        })
    }

    cateGoryFilter(filtervalue){
        this.setState({
            filter:filtervalue
        })
    }

    render(){

        var allproducts = this.props.userdetails.Productalldetails;
        var UserId = Object.keys(allproducts).map(key => allproducts[key]);
        var mergedProduct = [].concat.apply([], UserId);


        if(this.state.filter == 'Shiny & Web'){
             var filtereddata = mergedProduct.filter(function (detail) { return detail.category == 'Web or Shiny'});
        }

        else if(this.state.filter == 'Machine Learning'){
             var filtereddata = mergedProduct.filter(function (detail) { return detail.category == 'Machine-Learning'});
        }

        else if(this.state.filter == 'Big Data'){
             var filtereddata = mergedProduct.filter(function (detail) { return detail.category == 'Big-Data'});
        }

        else if(this.state.filter == 'Algorithms'){
             var filtereddata = mergedProduct.filter(function (detail) { return detail.category == 'Algorithms'});
        }

        else if(this.state.filter == 'Graphics'){
             var filtereddata = mergedProduct.filter(function (detail) { return detail.category == 'Graphics'});
        }

        else if(this.state.filter == 'Other'){
             var filtereddata = mergedProduct.filter(function (detail) { return detail.category == 'Other'});
        }
        else if(this.state.filter == '' || this.state.filter == 'All Product'){
            var filtereddata = mergedProduct;
        }
        else {
                var filtereddata = mergedProduct.filter(
                    (detail) => {
                        return detail.Title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
                    }
                );
        }


        if(allproducts == false){
            return(
            <div className="background">
                <div className="loader">
                    <Loading type='spin' color='#ffffff' />
                </div>
            </div>
            )
        }
        else {
            return (
                    <div  className="container-search-flex">
                        <div className="row" >
                            <Tags onUpdateFilter={this.SearchFilter.bind(this)} cateGoryFilter={this.cateGoryFilter.bind(this)}/>
                            {
                                filtereddata.map((detail, index)=> {
                                    return <Product item={detail} key={index} />
                                })
                            }
                        </div>
                    </div>
            )
        }
    }
}

export default ProductSearch;



