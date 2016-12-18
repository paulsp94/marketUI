import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import ReactMarkdown from 'react-markdown';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { submitProductContentDetails } from '../../action/action.jsx'

function mapStateToProps(store) {
    return { userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitProductContentDetails
    }, dispatch);
}


class Content extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            textfieldvalue:'',
            markdownSyntax:'<iframe width="100%" height="100%"src="https://guides.github.com/features/mastering-markdown/"></iframe>',
            isOpened: false,
            showSyntax: false,
            Error:''
        };
    }

    componentWillMount(){
        var ProductId = this.props.ProductId;

        if(this.props.validation == "RIGHTVALIDATION") {


            firebase.database().ref('Content').orderByChild('ProductId').equalTo(ProductId).once("child_added", (snapshot) => {

                var Description = snapshot.val().textfieldvalue1;


                this.setState({
                    textfieldvalue: Description
                });

            });

        }

        else{

            var Description = '';

            this.setState({
                textfieldvalue: Description
            });

        }

    }

      handleClick(event){
        var newShowSyntax =  this.state.showSyntax ? false : true;
        this.setState({
            showSyntax: newShowSyntax
        });
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
            var ProductId = this.props.ProductId;
            firebase.database().ref("Content/" + ProductId).set({
                ProductId :ProductId,
                textfieldvalue1 : textfieldvalue1,
            });

        }
    }
    
    render(){
        var thisIsMyCopy = this.state.showSyntax ?  this.state.markdownSyntax : this.state.textfieldvalue;
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
                            onMouseOver: () => alert('new folder')
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
            <div>
                <div className="warning">
                    {this.state.Error}
                    </div>
                <Card style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                   <CommandBar farItems={ commands } items = {leftCommands} />
                    <div className="product-tab2">
                        <div className="markdowncode">
                        <textarea value={this.state.textfieldvalue} onChange={this.textBox1.bind(this)} className="textarea" placeholder="Add here your markdown or html code" ref={(efg) => this.textbox = efg}  name="textbox">
                        </textarea>
                        </div>
                        <div className="markdowntext">
                            <ReactMarkdown source={thisIsMyCopy} escapeHtml={false} />
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Content;



