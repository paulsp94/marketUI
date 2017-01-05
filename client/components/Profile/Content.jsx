import React, { Component } from 'react';
import {Link} from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {withRouter} from 'react-router';
import { browserHistory } from 'react-router'

export default class Content extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
        };
    }

    updateItem(event){
        var productname = this.props.item.name;
        this.props.ViewItemrateprice(productname);
    }

    EditDetails(){
        var productid = this.props.item.productid;
        browserHistory.push('EditProduct/'+ productid);
    }

    render(){
        return (
                <Card style={{ marginRight: "2%", marginLeft: "2%", marginTop: 9}} onClick={this.updateItem.bind(this)}>
                    <div className="Product" >
                        <CardText>
                            <img className="productimage" src={this.props.item.Subimage}/>
                            <div className="text-part">
                                <h4> <strong> {this.props.item.Title} </strong> </h4>
                                <RaisedButton onTouchTap={this.EditDetails.bind(this)} label="Edit Details" style={{ margin: 12}} />
                            </div>
                        </CardText>
                    </div>
                </Card>
        )
    }
}