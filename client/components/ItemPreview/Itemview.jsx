import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import ReactMarkdown from 'react-markdown';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class  Itemview extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            code:"color: blue",
	        expanded: false,
        };

    }

    render(){

        var buttonvalue = 'dssf';

        if(buttonvalue == ''){
            var button = '';
        }
        else {
            var button = <RaisedButton label="Preview" style={{ marginLeft: "44%", marginRight: "44%"}} />
        }

        var thisIsMyCopy = this.props.Description.Description;

        return (
	    <MuiThemeProvider>
            <div>
                <div className="container">
			
		      <Card  style={{backgroundColor: "#efeadd"}}>
		   
			<CardMedia
			  overlay={<CardTitle title={this.props.productcoredetails.Title} subtitle={this.props.productcoredetails.SubTitle} />}>
			  <img src={this.props.productcoredetails.Mainimage} />
            </CardMedia>

            <Card style={{ marginRight: 40, marginLeft: 40}}>
                {button}
			<CardText >
				  <div className="code">
				        <ReactMarkdown source={thisIsMyCopy} />
				    </div>
			</CardText>
		      </Card>
              </Card>
		
             

                </div>
            </div>
	    </MuiThemeProvider>
        )
    }
}

export default Itemview;
