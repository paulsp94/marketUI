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


class  App extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            filldetails:'',
        };

    }

    save(){
       var inputfileldvalue =  this.task.value;

        if(inputfileldvalue == ''){
            this.setState({
                filldetails: "Please Write Task Name",
            });
        }
        else {

            AppActions.createComment(inputfileldvalue);
            hashHistory.push('Tasks');
        }
    }




    render(){


        var details = this.state.filldetails;

        return (

            <div>
                <Header/>
                <Sidebar/>
                <br/>
                <ProductContent/>
            </div>


        )
    }
}

export default App;



