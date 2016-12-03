import React, { Component } from 'react';
var Loading = require('react-loading');
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

        if(allproducts == false){
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
}

export default ProductSearch;



