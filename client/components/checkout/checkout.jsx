import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


var checkout = React.createClass({ 


    render(){

        return (
            <div>
             	<div className="container-search">
 	             	<Card style={{padding: 0}}>

             		<h1> Placeholder for react-stripe-checkout </h1>
             		<RaisedButton label="Checkout" style={{ margin: 12}} primary={true} />
             	</Card>
             	</div>
            </div>
        )
    }

});

module.exports = checkout;


