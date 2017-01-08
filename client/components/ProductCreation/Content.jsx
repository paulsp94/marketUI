import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
var firebase = require('firebase');
import Loading from 'react-loading';
import firebase_details from '../../Firebase/Firebase';
import ReactMarkdown from 'react-markdown';
import {CommandBar} from 'office-ui-fabric-react/lib/CommandBar';
import {submitProductContentDetails} from '../../action/action.jsx'

function mapStateToProps(store) {
  return {userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitProductContentDetails
  }, dispatch);
}


class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textfieldvalue: '',
      markdownSyntax: '<iframe width="100%" style="height: 83vh; overflow:hidden; border: none;" src="https://vaionex.com/Markdown.html"></iframe>',
      isOpened: false,
      showSyntax: false,
      uploader: 'upload',
      Error: ''
    };
    this.onUpload = this.onUpload.bind(this);
    this._handleFileUpload = this._handleFileUpload.bind(this);
  }

  componentWillMount() {
    var ProductId = this.props.ProductId;

    if (this.props.validation == "RIGHTVALIDATION") {


      firebase.database().ref('Content').orderByChild('ProductId').equalTo(ProductId).once("child_added", (snapshot) => {

        var Description = snapshot.val().textfieldvalue1;


        this.setState({
          textfieldvalue: Description
        });

      });

    }

    else {

      var Description = '';

      this.setState({
        textfieldvalue: Description
      });

    }

  }

  handleClick(event) {
    this.setState({
      showSyntax: true,
      showMediaUploader: false
    });
  }

    preview(event) {
    this.setState({
      showSyntax: false,
      showMediaUploader: false
    });
  }

  textBox1() {
    var textfieldvalue = this.textbox.value;
    this.setState({
      textfieldvalue: textfieldvalue
    });
  }

  subMit() {
    var textfieldvalue1 = this.state.textfieldvalue;
      var ProductId = this.props.ProductId;
      var user = firebase.auth().currentUser;
      var Userid = user.uid;

      firebase.database().ref("Content").child(ProductId).once("value", (snapshot) => {
          if (snapshot.exists()) {
              var Userid1 = snapshot.val().Userid;
              firebase.database().ref("Content/" + ProductId).set({
                  ProductId: ProductId,
                  textfieldvalue1: textfieldvalue1,
                  Userid:Userid1
              });
          }
          else {
              firebase.database().ref("Content/" + ProductId).set({
                  ProductId: ProductId,
                  textfieldvalue1: textfieldvalue1,
                  Userid:Userid
              });
          }
      });

  }

  onUpload() {
    this.setState({
      showMediaUploader: true
    });
  }

  _handleFileUpload() {
    this.setState({
      uploadingMedia: true
    });
    let file = this.refs.uploadBtn.files[0];
    let storageRef = firebase.storage().ref();
    let fileRef = storageRef.child(`${+ new Date()}${file.name}`);
    fileRef.put(file).then((snapshot) => {
      let fileUrl = snapshot.downloadURL;
      let markdownText = `![${file.name}](${fileUrl})`;
      this.setState({
        textfieldvalue: `${this.state.textfieldvalue} \n ${markdownText}`,
        showMediaUploader: false,
        uploadingMedia: false
      })
    });
  }

  render() {
    var thisIsMyCopy = this.state.showSyntax ? this.state.markdownSyntax : this.state.textfieldvalue;
    const leftCommands = [
      {}
    ];
    const commands = [
       {
        key: 'preview',
        name: 'Code Preview',
        icon: 'preview',
        onClick: this.preview.bind(this)
      },
       {
        key: 'upload',
        name: 'Media Upload',
        icon: 'Upload',
        onClick: this.onUpload.bind(this)
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
        <Card className="fullHeight" style={{marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
          <CommandBar farItems={ commands } items={leftCommands}/>
          <div className="product-tab2">
            <div className="markdowncode">
                        <textarea value={this.state.textfieldvalue} onChange={this.textBox1.bind(this)}
                                  className="textarea" placeholder="Add here your markdown or html code"
                                  ref={(efg) => this.textbox = efg} name="textbox">
                        </textarea>
            </div>
            <div className="markdowntext">
              {
                this.state.uploadingMedia ?
                  <Loading type='spin' color='#00284c' />
                  :
                  this.state.showMediaUploader ?
                    <div className="file-uploader">
                      <br/>
                      <input type="file" ref="uploadBtn" id="uploadBtn" onChange={this._handleFileUpload}/>
                    </div> :
                    <ReactMarkdown source={thisIsMyCopy} escapeHtml={false}/>
              }
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default Content;




