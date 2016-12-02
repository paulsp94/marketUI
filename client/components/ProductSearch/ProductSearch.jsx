import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ReactMarkdown from 'react-markdown';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import Product from './Product.jsx';
import Tags from './Tags.jsx';
import { FetchAllPublishedproduct } from '../../action/action.jsx'

var data = [
    {image:"https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=90a14bfc86ece2e02bb67cb5decef29b", Price:"$5", name: "Product 1" },
    {image:"https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=098777638826d5753222a09116959b23", Price:"$10", name: "Product 2" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" },
    {image:"https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=90a14bfc86ece2e02bb67cb5decef29b", Price:"$5", name: "Product 1" },
    {image:"https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=098777638826d5753222a09116959b23", Price:"$10", name: "Product 2" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" },
     {image:"https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=90a14bfc86ece2e02bb67cb5decef29b", Price:"$5", name: "Product 1" },
    {image:"https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=098777638826d5753222a09116959b23", Price:"$10", name: "Product 2" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" },
    {image:"https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=90a14bfc86ece2e02bb67cb5decef29b", Price:"$5", name: "Product 1" },
    {image:"https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=098777638826d5753222a09116959b23", Price:"$10", name: "Product 2" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" },
     {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" },
    {image:"https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f043061c9a5cdbd0fc2f114e2f52f0fd", Price:"$15", name: "Product 3" },

];

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
        };
    }

    componentWillMount(){
        this.props.FetchAllPublishedproduct();
    }

    render(){

        var allproducts = this.props.userdetails.Productalldetails;

        var UserId = Object.keys(allproducts).map(key => allproducts[key]);

        var mergedProduct = [].concat.apply([], UserId);

        return (
            <MuiThemeProvider>
            <div>
                <Header/>
                   <div className="container-search">
                        <Tags/>

                        {
                            mergedProduct.map((detail)=> {
                                return <Product item={detail}
                                />
                            })
                        }
              </div>
            </div>  
            </MuiThemeProvider>
        )
    }
}

export default ProductSearch;



