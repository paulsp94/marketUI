import React, { Component } from 'react';
var AppActions = require('../../Action/AppActions');
var AppStore = require('../../Stores/AppStore');
import {Link} from "react-router";
import {withRouter} from 'react-router';
import { hashHistory } from 'react-router';
import Header from '../Header/Header.jsx';
import Subheader from '../Subheader/Subheader.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Tab as MuiTab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import ReactMarkdown from 'react-markdown';


class  Description extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            textfieldvalue1:'',
        };
    }

    textBox1(){
        var textfieldvalue = this.textbox1.value;
        this.setState({
            textfieldvalue1 :textfieldvalue
        });
    }

    subMit(){

        var textfieldvalue1 = this.state.textfieldvalue1;

        if(textfieldvalue1 == ''){
            this.setState({
                Error:"Please fill Every Detail",
            });
        }
        else {

            var ProductId = firebase.database().ref("Description").push().key;

            var newData = {
                ProductId :ProductId,
                textfieldvalue1 : textfieldvalue1,
                Userid:'',
            }

            firebase.database().ref("Description").push(newData);

        }

    }


    render(){
        var thisIsMyCopy1 = this.state.textfieldvalue1;

        return (
            <MuiThemeProvider>
                <div>
                    <div className="product-header">
                        <RaisedButton onClick={this.subMit.bind(this)} label=" Save" style={{ margin: 12}}/>
                    </div>
                    <Card style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                        <div className="product-tab">

                            <div className="markdowncode" >
                                <textarea className="textarea" placeholder="Add here your markdown or html code" ref={(eg) => this.textbox1 = eg}  name="textbox1" onChange={this.textBox1.bind(this)}>
                                </textarea>
                            </div>

                            <div className="markdowntext">
                                <ReactMarkdown source={thisIsMyCopy1} escapeHtml={false} />
                            </div>

                        </div>
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Description;



