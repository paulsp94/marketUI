import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import ProductContent from '../ProductContent/ProductContent.jsx';
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

        var divStyle = {
            backgroundImage: "url('client/Images/code.jpg')"
        };

        return (
            <div className="background" style={divStyle}>
                <Header/>
                <Sidebar/>
                <br/>
                <Itemview/>
            </div>
        )
    }
}

export default ItemPreview ;



