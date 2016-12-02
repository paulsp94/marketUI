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
import Flexbox from 'flexbox-react';

class Product extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };
    }

    render(){

        return (
            <div>
                <Card className="product-search" style={{padding: 0}}>
                    <img className="product_image" src={this.props.item.Mainimage}/>
                    <h5>{this.props.item.name}</h5>
                    <h5> {this.props.item.Description} </h5>
                    <Flexbox flexDirection="row">
                        <Flexbox flexGrow={1}>
                            <RaisedButton label="4.8" style={{ margin: 1, width: "100%"}} />
                        </Flexbox>
                        <Flexbox flexGrow={1}>
                            <RaisedButton label={this.props.item.Price} style={{ margin: 1, width: "100%"}} /> 
                        </Flexbox>
                        <Flexbox flexGrow={1}>
                            <RaisedButton label="223" style={{ margin: 1, width: "100%"}} />
                        </Flexbox>
                    </Flexbox>
                </Card>
            </div>
        )
    }
}

export default Product;



