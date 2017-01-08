import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card} from 'material-ui/Card';
import ReactMarkdown from 'react-markdown';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Description } from '../../action/action.jsx';

function mapStateToProps(store) {
    return { userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        Description
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class  Descriptiondetails extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            textfieldvalue1:'',
            markdownSyntax:'<iframe width="100%" style="height: 83vh; overflow:hidden; border: none;" src="https://guides.github.com/features/mastering-markdown/"></iframe>',
            isOpened: false,
            showSyntax: false,
            Error:'',
        };
    }

    componentWillMount(){
        var ProductId = this.props.ProductId;

        if(this.props.validation == "RIGHTVALIDATION") {

            firebase.database().ref('Description').orderByChild('Productid').equalTo(ProductId).once("child_added", (snapshot) => {

                var Description = snapshot.val().textfieldvalue1;

                this.setState({
                    textfieldvalue1 :Description
                });
            });
        }

        else{
            var Description = '';

            this.setState({
                textfieldvalue1 :Description
            });
        }
    }

    preview(event) {
        this.setState({
          showSyntax: false,
          showMediaUploader: false
        });
    }

    handleClick(event){
        this.setState({
            showSyntax: true
        });
    }

    textBox1(){
        var textfieldvalue = this.textbox1.value;
        this.setState({
            textfieldvalue1 :textfieldvalue
        });
    }

    subMit(){

        var user = firebase.auth().currentUser;
        var Userid = user.uid;
        var textfieldvalue1 = this.state.textfieldvalue1;
        var ProductId = this.props.ProductId;

        firebase.database()
            .ref('Description')
            .child(ProductId)
            .once("value", (snapshot) => {

                if (snapshot.exists()) {
                    firebase.database().ref("Description/" + ProductId).set({
                        Productid: ProductId,
                        textfieldvalue1: textfieldvalue1,
                    });
                }
                else {
                    firebase.database().ref("Description/" + ProductId).set({
                        Productid: ProductId,
                        textfieldvalue1: textfieldvalue1,
                        Userid: Userid
                    });
                }

            });
    }

    render(){
        var thisIsMyCopy1 = this.state.showSyntax ?  this.state.markdownSyntax : this.state.textfieldvalue1;
        const leftCommands = [ {/*
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
                      }, */}
        ];
        const commands = [
                      {
                        key: 'preview',
                        name: 'Code Preview',
                        icon: 'preview',
                        onClick: this.preview.bind(this)
                      },
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
                <Card className="fullHeight" style={{ marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                <CommandBar farItems={ commands } items = {leftCommands} />
                    <div className="product-tab2">
                        <div className="markdowncode" >
                            <textarea value={this.state.textfieldvalue1} className="textarea" placeholder="Add here your markdown or html code" ref={(eg) => this.textbox1 = eg}  name="textbox1" onChange={this.textBox1.bind(this)}>
                            </textarea>
                        </div>

                        <div className="markdowntext">
                            <ReactMarkdown source={thisIsMyCopy1} escapeHtml={false} />
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Descriptiondetails;



