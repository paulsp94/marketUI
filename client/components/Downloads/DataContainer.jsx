import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import ProductContent from '../ProductContent/ProductContent.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class  DataContainer extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
        };

    }


    updateItem(event){
        var productname = this.props.item.name;
        this.props.ViewItem(productname);
    }


    render(){

        var Style = {
            width: "47%",
            float: "left",
        };

        return (
            <MuiThemeProvider>
            <div className="Product" onClick={this.updateItem.bind(this)}>
                <CardMedia style = {Style}>
                <img className="productimage" src={this.props.item.image} />
                </CardMedia>

                <CardText>
                <div className="text-part">
                <h4> <strong> {this.props.item.name} </strong> </h4>
                    <br/> <br/>
                    <RaisedButton label="Download" style={{ margin: 12}} />
                    <RaisedButton label={this.props.item.Price} style={{ margin: 12}} />

                </div>
                </CardText>
            </div>
            </MuiThemeProvider>
        )
    }
}

export default DataContainer;



