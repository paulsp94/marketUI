import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';


class  Header extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };

    }




    render(){



        return (

            <div className="header">
                <h3> Featured Popular</h3>
                <img className="headerimg" src ={'client/Images/user.png'}/>
            </div>

        )
    }
}

export default Header;



