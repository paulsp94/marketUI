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
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ReactMarkdown from 'react-markdown';




class  General extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            textfieldvalue:'',
        };
    }


    textBox(){
        var textfieldvalue = this.textbox.value;
        this.setState({
            textfieldvalue :textfieldvalue
        });
    }

    render(){

        var thisIsMyCopy = this.state.textfieldvalue;
        console.log(thisIsMyCopy)
        return (
            <MuiThemeProvider>
                <div className="background">
                    <Header/>
                    <div className="productcontainer">
                        <Card style= {{backgroundColor: "#efeadd", paddingBottom: "1%"}}>
                            <Tabs>
                                <Tab label="General">
                                    <div>

                                    </div>
                                </Tab>
                                <Tab label="Descriptions">
                                    <div>

                                    </div>
                                </Tab>

                                <Tab label="Content">

                                    <Card style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                                        <div className="Product1" >
                                            <CardText>
                                                <div className="markdowncode" >
                                                    <CardText>
                                                        <textarea className="textarea" ref={(efg) => this.textbox = efg}  name="textbox" onChange={this.textBox.bind(this)}>
                                                        </textarea>
                                                    </CardText>
                                                </div>
                                                <div className="markdowntext" >
                                                    <CardText>
                                                        <ReactMarkdown source={thisIsMyCopy} />
                                                    </CardText>
                                                </div>
                                            </CardText>
                                        </div>
                                    </Card>

                                </Tab>

                                <Tab label="Sidebar">
                                           
                                </Tab>
                            </Tabs>
                        </Card>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default General;



