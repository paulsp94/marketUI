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
        .ref('Content')
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

      firebase.database().ref("Content").child(ProductId).once("value", (snapshot) => {
          if (snapshot.exists()) {
              var Userid1 = snapshot.val().Userid;
              firebase.database().ref("Content/" + ProductId).set({
                  ProductId: ProductId,
                  textfieldvalue1: textfieldvalue1,
                  Userid:Userid1
              }).then(this.showSnackbar)
          }
          else {
              firebase.database().ref("Content/" + ProductId).set({
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
                                  className="textarea" placeholder="Add here your markdown or html code. This part is the part that the user later downloads."
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
                              <div>
                              
                              {this.state.avatarURL &&
                               <div>
                                <h2> Iframe for Markdown HTML </h2>
                                <p>&lt;iframe width=&quot;100%&quot; style=&quot;height: 92vh;&quot; src=&quot;{this.state.avatarURL}&quot;&gt;&lt;/iframe&gt; </p>
                                </div>
                              }
                              </div>
                              <div>
                              
                              {this.state.avatarURL &&
                                <div>
                                <h2>Embedd Images: </h2>
                                <p>&lt;img src=&quot;{this.state.avatarURL}&quot; style=&quot;width:100%;&quot;&gt;</p>
                                </div>
                              }
                               </div>
                              <div>
                              </div>
                      
                    </div> :
                    <ReactMarkdown source={thisIsMyCopy} escapeHtml={false}/>
              }
              <Snackbar
                open={this.state.snackOpen}
                message="Content Saved!"
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

export default Content;




