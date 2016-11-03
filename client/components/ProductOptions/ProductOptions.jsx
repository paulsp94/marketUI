

import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

class  ProductOptions extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };

    }


    render(){


        return (
            <div >
                <Header/>
                <Sidebar/>
                <br/>
                <Subheader/>

                <div className="productpage-top">
                    <input type="file" />
                </div>

                <div className="productpage" >
                  Some Options will come here
                </div>
            </div>
        )
    }
}

export default ProductOptions;







