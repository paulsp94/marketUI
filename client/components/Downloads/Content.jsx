import React, { Component } from 'react';
import {Link} from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {withRouter} from 'react-router';
import { browserHistory } from 'react-router'

export default class Content extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
        };
    }

    updateItem(event){
        var productname = this.props.item.name;
        this.props.ViewItemrateprice(productname);
    }

    EditDetails(){
        console.log('hey it click me');
        var productid = this.props.item.productid;
        browserHistory.push('EditProduct/'+ productid);
    }

    render(){

        var Style = {};

        return (
                <Card style={{ marginRight: "2%", marginLeft: "2%", marginTop: 9}} onClick={this.updateItem.bind(this)}>
                    <div className="Product" >
                        <CardText>

                            <img className="productimage" src={this.props.item.Subimage} style = {Style}/>
                            <div className="text-part">

                                <h4> <strong> {this.props.item.Title} </strong> </h4>
                                <RaisedButton onClick={this.EditDetails.bind(this)} label="Edit Details" style={{ margin: 12}} />
                            </div>

                        </CardText>
                    </div>
                </Card>
        )
    }
}
