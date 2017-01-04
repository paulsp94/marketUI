import React, { Component } from 'react';
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
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
                <Sidebar/>
                <br/>
            </div>


        )
    }
}

export default App;



