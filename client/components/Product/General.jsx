import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
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
import ReactMarkdown from 'react-markdown';
import GeneralProfile from './GeneralProfile.jsx';
import Sidebar from './Sidebar.jsx';


class  General extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            textfieldvalue:'',
            textfieldvalue1:'',
        };
    }


    textBox(){
        var textfieldvalue = this.textbox.value;
        this.setState({
            textfieldvalue :textfieldvalue
        });
    }

    textBox1(){
        var textfieldvalue = this.textbox1.value;
        console.log(textfieldvalue);
        this.setState({
            textfieldvalue1 :textfieldvalue
        });
    }

    render(){

        var thisIsMyCopy = this.state.textfieldvalue;
        var thisIsMyCopy1 = this.state.textfieldvalue1;

        return (
            <MuiThemeProvider>
                <div className="background">
                    <Header/>
                    <div className="">
                        <Card style= {{backgroundColor: "#efeadd", paddingBottom: "1%"}}>
                            <Tabs>
                                <Tab label="General">
                                    <div>
                                        <GeneralProfile/>
                                    </div>
                                </Tab>
                                <Tab label="Descriptions">
                                    <Card style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                                        <div className="Product2">
                                            <div className="markdowncode" >
                                                        <textarea className="textarea" placeholder="Add here your markdown or html code" ref={(eg) => this.textbox1 = eg}  name="textbox1" onChange={this.textBox1.bind(this)}>
                                                        </textarea>
                                            </div>
                                            <div className="markdowntext">
                                                <ReactMarkdown source={thisIsMyCopy1} escapeHtml={false} />
                                            </div>
                                        </div>
                                    </Card>
                                </Tab>

                                <Tab label="Content">
                                    <Card style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                                        <div className="Product2">
                                                <div className="markdowncode" >
                                                        <textarea className="textarea" placeholder="Add here your markdown or html code" ref={(efg) => this.textbox = efg}  name="textbox" onChange={this.textBox.bind(this)}>
                                                        </textarea>
                                                </div>
                                                <div className="markdowntext"  >
                                                        <ReactMarkdown source={thisIsMyCopy} escapeHtml={false} />
                                                </div>
                                        </div>
                                    </Card>

                                </Tab>

                                <Tab label="Sidebar">
                                      <Sidebar/>
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



