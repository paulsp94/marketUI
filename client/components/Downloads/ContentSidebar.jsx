import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Subheader from '../Subheader/Subheader.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
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
                <div className="sidebar">
                    <Tabs>
                        <Tab label="Content" >
                            <Card expanded={this.state.expanded}>
                                <div className="createproduct">
                                   <Link to="/ContentCreation" className="">
                                       <RaisedButton label="Create Product" secondary={true} style={{ margin: 12}} />
                                    </Link>
                                </div>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
        )
    }
}


export default ContentSidebar ;



