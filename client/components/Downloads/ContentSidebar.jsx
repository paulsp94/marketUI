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


class ContentSidebar extends React.Component{

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
                        <Tab label="Content" >
                            <Card expanded={this.state.expanded}>
                                <div className="createproduct">
                                <RaisedButton label="Create Product" style={{ margin: 12}} />
                                </div>
                                <hr/>
                                
                                <CardText>
                                    <div className="userdescribation">
                                        Rating graph over time
                                    </div>
                                </CardText>
                                <hr/>

                                <CardText>
                                    <div className="userdescribation">
                                        sells Over Time Graph
                                    </div>
                                </CardText>
                                <hr/>

                                <CardText>
                                    <div className="userdescribation">
                                        <strong>Average rating</strong> - {this.props.productname[4]} <br/><br/>
                                        <strong>  Price -</strong> - {this.props.productname[5]}
                                    </div>
                                </CardText>

                                <hr/>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>

            </MuiThemeProvider>
        )
    }
}


export default ContentSidebar ;



