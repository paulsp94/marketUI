import React, { Component } from 'react';
import {Link} from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

class  Content extends React.Component{

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

    render(){

        var Style = {

        };

        return (
            <MuiThemeProvider>
                <Card style={{ marginRight: "2%", marginLeft: "2%", marginTop: 9}} onClick={this.updateItem.bind(this)}>
                    <div className="Product" >
                        <CardText>

                            <img className="productimage" src={this.props.item.Subimage} style = {Style}/>
                            <div className="text-part">

                                <h4> <strong> {this.props.item.Title} </strong> </h4>
                                <br/>  <hr/> <br/>
                                <RaisedButton label="Edit Details" style={{ margin: 12}} />
                            </div>

                        </CardText>
                    </div>
                </Card>

            </MuiThemeProvider>
        )
    }
}

export default Content;



