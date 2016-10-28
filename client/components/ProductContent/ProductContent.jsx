import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';

class  ProductContent extends React.Component{

    constructor(props) {

        super(props);
        this.state= {

        };

    }


    render(){


        return (
            <div >
                <Subheader/>
                <div className="productpage-top">
                    <input type="file" />
                </div>

              <div className="productpage" >
                Product Name
                <input className="inputfield-signup1" name="pname"     placeholder=" Product Name" /><br/><br/>
                Product Retail
                <input className="inputfield-signup1" name="retailer"     placeholder="Product Retail" /><br/><br/>
                Product Price
                <input className="inputfield-signup1" name="price"     placeholder="Product Price" /><br/><br/>
                Warenty Time
                <input className="inputfield-signup1" name="waanty"     placeholder="Warenty Time" /><br/><br/>
                <br/>

                <button className="submitbutton" bsStyle="primary" bsSize="large" > Submit   </button>
              </div>
            </div>
        )
    }
}

export default ProductContent;



