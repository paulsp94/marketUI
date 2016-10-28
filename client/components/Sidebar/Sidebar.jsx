import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';

class Sidebar extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };

    }


    render(){


        return (
            <div className="sidebar">
                <div className="side-header">
                <button className="buttons"> Product page </button>
                <button className="buttons"> Product Content </button>
                <button className="buttons"> Product Options </button>
                </div>

                <div className="rating">
                    <button className="buttons1"> Rating </button>
                    <button className="buttons1"> Price </button>
                    <button className="buttons1"> Number-sold </button>
                </div>

                <div className="sidebar-bottom">
                    Some product information &details
                </div>
            </div>
        )
    }
}

export default Sidebar ;



