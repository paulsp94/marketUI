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
import Snackbar from 'material-ui/Snackbar';
import FileUploader from 'react-firebase-file-uploader';
import LinearProgress from 'material-ui/LinearProgress';
var ClipboardButton = require('react-clipboard.js');


function mapStateToProps(store) {
  return {userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitProductContentDetails
  }, dispatch);
}

class Descriptiondetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textfieldvalue: '',
      lastSaved: '',
      markdownSyntax: '<iframe width="100%" style="height: 83vh; overflow:hidden; border: none;" src="https://vaionex.com/Markdown.html"></iframe>',
      isOpened: false,
      showSyntax: false,
      uploader: 'upload',
      Error: '',
      snackOpen: false,
      username: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: ''
    };
    this.onUpload = this.onUpload.bind(this);
    this._handleFileUpload = this._handleFileUpload.bind(this);
  }

  componentWillMount() {
    var ProductId = this.props.ProductId;

    if (this.props.validation == "RIGHTVALIDATION") {
      firebase.database()
        .ref('Description')
        .orderByChild('ProductId')
        .equalTo(ProductId)
        .once("child_added", (snapshot) => {
          var Description = snapshot.val().textfieldvalue1;
          this.setState({
            textfieldvalue: Description,
            lastSaved: Description
          });
        });
    } else {
      this.setState({
        textfieldvalue: '',
        lastSaved: ''
      });
    }

    // init autoSave timer
    const intervalId = setInterval(this.autoSave, 30000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    // clear autoSave timer
    this.autoSave();
    clearInterval(this.state.intervalId);
  }

  autoSave = () => {
    const { textfieldvalue, lastSaved } = this.state;
    if (textfieldvalue !== lastSaved) {
      this.onSubmit();
      this.setState({lastSaved: textfieldvalue});
    }
  };

  handleChangeUsername = (event) => this.setState({username: event.target.value});
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
      this.setState({isUploading: false});
      console.error(error);
  };
  handleUploadSuccess = (filename) => {
      this.setState({avatar: filename, progress: 100, isUploading: false});
      firebase.storage().ref('HTMLstorage').child(this.props.ProductId).child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
  };

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

  showSnackbar = () => {
    this.setState({
      snackOpen: true,
    });
  };

  closeSnackbar = () => {
    this.setState({
      snackOpen: false,
    });
  };

  onSubmit = () => {
    var textfieldvalue1 = this.state.textfieldvalue;
      var ProductId = this.props.ProductId;
      var user = firebase.auth().currentUser;
      var Userid = user.uid;

      firebase.database().ref("Description").child(ProductId).once("value", (snapshot) => {
          if (snapshot.exists()) {
              var Userid1 = snapshot.val().Userid;
              firebase.database().ref("Description/" + ProductId).set({
                  ProductId: ProductId,
                  textfieldvalue1: textfieldvalue1,
                  Userid:Userid1
              }).then(this.showSnackbar)
          }
          else {
              firebase.database().ref("Description/" + ProductId).set({
                  ProductId: ProductId,
                  textfieldvalue1: textfieldvalue1,
                  Userid:Userid
              }).then(this.showSnackbar)
          }
      });
  };

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
        onClick: this.onSubmit
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
                                  className="textarea" placeholder="Add here your markdown or html code. Here you create a summary of your project to give the user a first impression."
                                  ref={(efg) => this.textbox = efg} name="textbox">
                        </textarea>
            </div>
            <div className="markdowntext">
              {
                this.state.uploadingMedia ?
                  <Loading type='spin' color='#00284c' />
                  :
                   this.state.showMediaUploader ?
                    <div className="uploadPage">
                              <LinearProgress mode="determinate" value={this.state.progress} style={{height: 10}} />
                              <RaisedButton
                                label="upload file"
                                labelPosition="before"
                                labelStyle={{'fontSize': '13px'}}
                                containerElement="label"
                                secondary={true}
                                fullWidth
                                style={{marginBottom: 30}}
                              >
                              <div className="file-input-wrapper">
                              <FileUploader
                                accept="HTMLstorage/*"
                                name="avatar"
                                randomizeFilename
                                storageRef={firebase.storage().ref('HTMLstorage/' + this.props.ProductId)}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                              />
                              </div>
                              </RaisedButton>
                              <br/>
                              {this.state.avatarURL == '' ? 
                               <div className="uploadImage">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/rscriptmarket-66f49.appspot.com/o/statics%2FDownload_section.png?alt=media&token=20d04a46-4fbf-4d57-958e-2a7252b8d081" alt="Download Info"/>
                                  
                               </div>
                               : null
                               }

                              <div>
                               {this.state.avatarURL &&
                               <div className="linkCopy">
                                  <h4> Iframe for Markdown HTML </h4>
                                   <div className="linkCopy">
                                  <p>&lt;iframe width=&quot;100%&quot; style=&quot;height: 92vh;&quot; src=&quot;{this.state.avatarURL}&quot;&gt;&lt;/iframe&gt; </p>
                                  <ClipboardButton data-clipboard-text={&lt;iframe width=&quot;100%&quot; style=&quot;height: 92vh;&quot; src=&quot;{this.state.avatarURL}&quot;&gt;&lt;/iframe&gt;}>
                                      copy to clipboard
                                   </ClipboardButton>
                                  </div>
                               </div>
                              }
                              </div>
                              <div>
                              
                              {this.state.avatarURL &&
                                <div className="linkCopy">
                                  <h4>Embedd Images: </h4>
                                   <div className="linkCopy">
                                  <p>&lt;img src=&quot;{this.state.avatarURL}&quot; style=&quot;width:100%;&quot;&gt;</p>
                                   </div>
                                </div>
                              }
                               </div>
                               <div>
                              
                              {this.state.avatarURL &&
                                <div className="linkCopy">
                                  <h4>File Link (for Dataset uploads): </h4>
                                  <div className="linkCopy">
                                  <p>{this.state.avatarURL}</p>
                                  </div>
                                </div>
                              }
                               </div>
                              <div>
                              </div>
                      
                    </div> :
                    <ReactMarkdown
                      source={thisIsMyCopy}
                      escapeHtml={false}
                      onChange={(e) => console.log('onChange', e.target)}
                      onBlur={(e) => console.log('onBlur', e.target)}
                      onFocus={(e) => console.log('onFocus', e.target)}
                    />
              }
              <Snackbar
                open={this.state.snackOpen}
                message="Description Saved!"
                autoHideDuration={3000}
                onRequestClose={this.closeSnackbar}
              />
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default Descriptiondetails;




