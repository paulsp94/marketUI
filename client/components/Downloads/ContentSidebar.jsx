import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

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



