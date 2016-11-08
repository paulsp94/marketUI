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
                            <Link to="ItemPreview"> <h3>Item Preview</h3> </Link>
                            <Link to="General"> <h3>product</h3> </Link>
                            <Link to="ProductSearch"> <h3>product Search</h3> </Link>
                            <Link to="registration"> <h3> registration </h3> </Link>
                            <Link to="login"> <h3> login </h3> </Link>
                            <Link to="logout"> <h3> logout </h3> </Link>
                            <Link to="/"> <h3> profile </h3> </Link>
                        </div>
                    </Card>

                </MuiThemeProvider>
        )
    }
}

export default Header;



