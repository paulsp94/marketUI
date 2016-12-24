import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { browserHistory } from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

class  DataContainer extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
        };

    }

    updateItem(event){
        var productname = this.props.item.productid;
        this.props.ViewItem(productname);
    }

    ProductContentDownload(){
        var productid = this.props.item.productid;
        browserHistory.push('ProductContent/'+ productid);
    }

    render(){

        var Style = {
        };

        return (
            <Card style={{ marginRight: "2%", marginLeft: "2%", marginTop: 9}} onClick={this.updateItem.bind(this)}>
            <div className="Product" >
                <CardText>
                    <img className="productimage" src={this.props.item.Subimage} style = {Style}/>
                <div className="text-part">
                <h4> <strong> {this.props.item.Title} </strong> </h4>
                    <RaisedButton onClick={this.ProductContentDownload.bind(this)} label="Download" style={{ margin: 12}} />
                </div>
                </CardText>
            </div>
            </Card>
        )
    }
}

export default DataContainer;



