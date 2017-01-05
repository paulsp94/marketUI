import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { browserHistory } from 'react-router';
import { hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

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

        return (
            <Card style={{ marginRight: "2%", marginLeft: "2%", marginTop: 9}} 
                    onTouchTap={this.updateItem.bind(this)}
            >
                <div className="Product" >
                    <CardText>
                        <img className="productimage" src={this.props.item.Subimage}/>
                    <div className="text-part">
                    <h4> <strong> {this.props.item.Title} </strong> </h4>
                        <RaisedButton onTouchTap={this.ProductContentDownload.bind(this)} label="Download" style={{ margin: 12}} />
                    </div>
                    </CardText>
                </div>
            </Card>
        )
    }
}

export default DataContainer;



