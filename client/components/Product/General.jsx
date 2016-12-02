import React, { Component } from 'react';
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
import GeneralProfile from './GeneralProfile.jsx';
import Sidebar from './Sidebar.jsx';
import './Product.css';
import Description from './Description.jsx';
import Content from './Content.jsx';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';


class  General extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            ProductID:''
        };
    }

    componentWillMount(){
        var ProductId = firebase.database().ref("ProductCoreDetails").push().key;
        this.setState({
            ProductID: ProductId
        })
    }


    render(){

        return (
            <MuiThemeProvider>
                <div className="">
                    <Header/>
                    <div className="" style={{backgroundColor: "#efeadd", paddingBottom: "0.5%"}}>
                            <Tabs>
                                <Tab label="General">
                                    <div>
                                        <GeneralProfile ProductId = {this.state.ProductID} />
                                    </div>
                                </Tab>
                                <Tab label="Descriptions">
                                    <Description ProductId = {this.state.ProductID}/>
                                </Tab>

                                <Tab label="Content">
                                    <Content ProductId = {this.state.ProductID}/>
                                </Tab>

                                <Tab label="Sidebar">
                                      <Sidebar ProductId = {this.state.ProductID}/>
                                </Tab>
                            </Tabs>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default General;