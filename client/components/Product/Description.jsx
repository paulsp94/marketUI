import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import ReactMarkdown from 'react-markdown';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';



class  Description extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            textfieldvalue1:'',
            markdownSyntax:'<iframe width="100%" height="100%"src="https://guides.github.com/features/mastering-markdown/"></iframe>',
            isOpened: false,
            showSyntax: false,
        };
    }

    handleClick(event){
        var newShowSyntax =  this.state.showSyntax ? false : true;
        this.setState({
            showSyntax: newShowSyntax
        });
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
        var thisIsMyCopy1 = this.state.showSyntax ?  this.state.markdownSyntax : this.state.textfieldvalue1;
        const leftCommands = [
                           {
                        key: 'new',
                        name: 'New',
                        icon: 'Add',
                        items: [
                          {
                            key: 'folder',
                            name: 'Folder',
                            icon: 'Folder',
                            onClick: () => alert('new folder')
                          },
                          {
                            key: 'sep',
                            name: '-'
                          },
                          {
                            key: 'word',
                            name: 'Word document',
                            icon: 'WordLogo',
                            onClick: () => alert('word doc')
                          },
                          {
                            key: 'excel',
                            name: 'Excel spreadsheet',
                            icon: 'ExcelLogo',
                            iconProps: {
                              style: { color: 'red' }
                            },
                            onClick: () => alert('word doc')
                          }
                        ]
                      },
                      {
                        key: 'upload',
                        name: 'Upload',
                        icon: 'Upload',
                        onClick: () => alert('upload')
                      },
        ];
        const commands = [
                      {
                        key: 'share',
                        name: 'Markdown Guide',
                        icon: 'Share',
                        onClick: this.handleClick.bind(this)
                      },
                       {
                        key: 'Save',
                        name: 'Save',
                        icon: 'Share',
                        onClick: this.subMit.bind(this)
                      }
                    ];

        return (
            <MuiThemeProvider>
                <div>
                    <Card style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                    <CommandBar 
                        farItems={ commands } items = {leftCommands}
                    />
                        <div className="product-tab2">

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



