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
var FileInput = require('react-file-input');
import FileUploader from 'react-firebase-file-uploader';
import ReactMarkdown from 'react-markdown';

class  Content extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            textfieldvalue:'',
        };
    }

    textBox1(){
        var textfieldvalue =  this.textbox.value;
        this.setState({
            textfieldvalue: textfieldvalue
        });
    }

    subMit(){

        var textfieldvalue1 = this.state.textfieldvalue;

        if(textfieldvalue1 == ''){
            this.setState({
                Error:"Please fill Every Detail",
            });
        }
        else {

            var ProductId = firebase.database().ref("Content").push().key;

            var newData = {
                ProductId :ProductId,
                Content: textfieldvalue1,
                Userid:'',
            }

            firebase.database().ref("Content").push(newData);

        }

    }

    render(){
        var thisIsMyCopy = this.state.textfieldvalue;

        return (
            <MuiThemeProvider>
                <div>
                    <div className="product-header">
                        <RaisedButton onClick={this.subMit.bind(this)} label=" Save" style={{ margin: 12}}/>
                    </div>
                    <Card style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                        <div className="product-tab">
                            <div className="markdowncode" >
                                                        <textarea onChange={this.textBox1.bind(this)} className="textarea" placeholder="Add here your markdown or html code" ref={(efg) => this.textbox = efg}  name="textbox">
                                                        </textarea>
                            </div>
                            <div className="markdowntext"  >
                                <ReactMarkdown source={thisIsMyCopy} escapeHtml={false} />
                            </div>
                        </div>
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Content;



