
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
import './Product.css';
import Description from './Description.jsx';
import Content from './Content.jsx';


class  General extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };
    }


    render(){

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
                                    <Description />
                                </Tab>

                                <Tab label="Content">
                                    <Content />
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



