import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Itemview from './Itemview.jsx';

class  ItemPreview extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
        };

    }


    render(){


        return (
            <div className="background">
                <Header/>
                 <Itemview/>
                 <Sidebar/>
            </div>
        )
    }
}

export default ItemPreview ;



