import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class  Header extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };

    }




    render(){



        return (
                <MuiThemeProvider>
                    <Card>
                        <div className="header">
                        <h3> Featured Popular</h3>
                        </div>
                    </Card>
                </MuiThemeProvider>
        )
    }
}

export default Header;



