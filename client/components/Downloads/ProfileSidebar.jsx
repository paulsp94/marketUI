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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class ProfileSidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            Currenticon:'',
            Currentstate:'',
            expanded: false,
            showCheckboxes: false,
        };
    }

    render(){
        return (
            <MuiThemeProvider>
                <div className="sidebar">
                 <Tabs>
                 <Tab label="header" >
                    <Card expanded={this.state.expanded}>
                            <img className="Userimage" src ={'client/Images/code.jpg'}/> <br/>
                            <CardText>
                                <div className="userdescribation">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                        <br/>
                                        by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                </div>
                            </CardText>
                    </Card>
                     </Tab>
                    </Tabs>
                </div>

            </MuiThemeProvider>
        )
    }
}


export default ProfileSidebar ;



