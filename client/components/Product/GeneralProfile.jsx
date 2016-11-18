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

class  GeneralProfile extends React.Component{

    constructor(props) {

        super(props);
        this.state= {
            title:"",
            subtitle:"",
            describtion:"",
            price:"",
            category:'',
            Error:"",
            username: '',
            avatar: '',
            isUploading: false,
            progress: 0,
            avatarURL: '',
            avatar1: '',
            isUploading1: false,
            progress1: 0,
            avatarURL1: '',
            open:false,
            open1:false,
        };

    }



    TiTle(){
        var title = this.title.value;
        this.setState({
            title :title
        });
    }

    SubTitle(){
        var subtitle = this.subTitle.value;
        this.setState({
            subtitle :subtitle
        });
    }

    DescriPtion(){
        var describtion = this.textarea.value;
        this.setState({
            describtion :describtion
        });
    }

    PriCe(){

        var price =  this.Price.value;
        this.setState({
            price : price
        });

    }

    ProdctCategory(){

        var category = this.Category.value;
        this.setState({
            category :category
        });

    }

    SubMit(){

        var title = this.state.title;
        var subtitle = this.state.subtitle;
        var describtion = this.state.describtion;
        var price = this.state.price;
        var category = this.state.category;
        var url= this.state.avatarURL;
        var url1= this.state.avatarURL1;

        if(title == '' || subtitle == '' || describtion == '' || price == '' || category == ''|| url == ''|| url1 == ''){
            this.setState({
                Error:"Please fill Every Detail",
            });
        }
        else {

            var ProductId = firebase.database().ref("ProductCoreDetails").push().key;

            var newData = {
                ProductId :ProductId,
                Title:title,
                Subtitle:subtitle,
                Description:describtion,
                Price: price,
                mainImage:url,
                subImage:url1,
            }

            firebase.database().ref("ProductCoreDetails").push(newData);

        }

    }


    handleUploadStart(){
        this.setState({isUploading: true, progress: 0});
    }

    handleProgress(progress) {
        this.setState({
            progress:progress
        });
    }

    handleUploadError(error) {
        this.setState({
            isUploading: false
        });
        console.error(error);
    }

    handleUploadSuccess(filename){
        this.setState({
            avatar: filename,
            progress: 100,
            isUploading: false
        });

        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));

    }

    handleUploadStart1(){
        this.setState({isUploading1: true, progress1: 0});
    }

    handleProgress1(progress1) {
        this.setState({
            progress1:progress1
        });
    }

    handleUploadError1(error) {
        this.setState({
            isUploading1: false
        });
        console.error(error);
    }

    handleUploadSuccess1(filename){
        this.setState({
            avatar1: filename,
            progress1: 100,
            isUploading1: false
        });

        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL1: url}));

    }

    Dropboxopen1(){
        this.setState({open: true});
    }

    Dropboxcloase1(){
        this.setState({open: false});
    }

    Dropboxopen2(){
        this.setState({open1: true});
    }

    Dropboxcloase2(){
        this.setState({open1: false});
    }

    render(){

        var style = {
            height : "300px",
        };

        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.Dropboxcloase1.bind(this)}
            />
        ];

        const actions1 = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.Dropboxcloase2.bind(this)}
            />
        ];

        return (
            <MuiThemeProvider>
                <div className="Profiledata">

                    <div className="product-header">
                        <RaisedButton onClick={this.SubMit.bind(this)} label=" Save" style={{ margin: 12}}/>
                    </div>

                    <Card style={{marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                        <div className="product-tab" >

                          <div className="left-panel">
                              <div style={{marginTop: 25}}>
                                <p> this is the creation page! here you can interactivly create your content. Dont forget to save & publish your work </p>
                                </div>
                              <div className="warning">
                              {this.state.Error}
                              </div>
                                <div className="productdisplayleft">
                                <Card style={{padding: 20, backgroundColor: "white"}}>
                                          <input name="title" ref={(a) => this.title = a} type="text" className="inputfield-signup1" placeholder="Title" onChange={this.TiTle.bind(this)}/>
                                          <input name="subtitle" ref={(c) => this.subTitle = c} type="text" className="inputfield-signup1" placeholder="sub-title" onChange={this.SubTitle.bind(this)}/><br/><br/>
                                          <br/><br/>
                                          <RaisedButton label="Upload main-Image" onTouchTap={this.Dropboxopen1.bind(this)} style={{ margin: 12}} />
                                           <RaisedButton label="Upload Sub-Image" onTouchTap={this.Dropboxopen2.bind(this)} style={{ margin: 12}}/>
                                           <br/><br/>

                                    <Dialog
                                        actions={actions}
                                        modal={false}
                                        open={this.state.open}
                                        onRequestClose={this.Dropboxcloase1.bind(this)}>

                                        <h3> Upload Main-Image </h3> <br/> <br/>

                                        <FileUploader
                                            accept="image/*"
                                            name="avatar"
                                            randomizeFilename
                                            storageRef={firebase.storage().ref('images')}
                                            onUploadStart={this.handleUploadStart.bind(this)}
                                            onUploadError={this.handleUploadError.bind(this)}
                                            onUploadSuccess={this.handleUploadSuccess.bind(this)}
                                            onProgress={this.handleProgress.bind(this)} />

                                    </Dialog>


                                    <Dialog
                                        actions={actions1}
                                        modal={false}
                                        open={this.state.open1}
                                        onRequestClose={this.Dropboxcloase2.bind(this)}>

                                        <h3> Upload Sub-Image </h3> <br/> <br/>

                                        <FileUploader
                                            accept="image/*"
                                            name="avatar"
                                            randomizeFilename
                                            storageRef={firebase.storage().ref('images')}
                                            onUploadStart={this.handleUploadStart1.bind(this)}
                                            onUploadError={this.handleUploadError1.bind(this)}
                                            onUploadSuccess={this.handleUploadSuccess1.bind(this)}
                                            onProgress={this.handleProgress1.bind(this)} />

                                    </Dialog>



                                          <select name="Category" ref={(ab) => this.Category = ab} className="inputfield-signup1" onChange={this.ProdctCategory.bind(this)}>
                                              <optgroup label="Category">
                                              <option value="Category">  Category </option>
                                                  <option value="Category">  Category </option>
                                                  <option value="Category1" > Category1 </option>
                                                  <option value="Category7">  Category7 </option>
                                                  <option value="Category2">  Category2 </option>
                                                  <option value="Category3">  Category3 </option>
                                                  <option value="Category4">  Category4 </option>
                                              </optgroup>
                                          </select>

                                          <textarea name="textarea" ref={(d) => this.textarea = d} className="textarea1" placeholder="Description about Product"
                                                    onChange={this.DescriPtion.bind(this)}/> <br/> <br/>
                                          <input name="Price" ref={(ef) => this.Price = ef}  type="text" className="inputfield-signup1"
                                          placeholder="Price in $"
                                          onChange={this.PriCe.bind(this)}/><br/><br/>
                              </Card>
                              </div>
                          </div>

                          <div className="right-panel">

                              <div className="container2">
                                      <CardMedia
                                          overlay={<CardTitle title={this.state.title} subtitle={this.state.subtitle}/>}>
                                          <img style ={{height: 400}} src={this.state.avatarURL} />
                                      </CardMedia>
                                      </div>
                                 
                                  <div className="itemCard">
                                    <Card>

                                      <CardMedia>
                                          <img className="productimage1" src={this.state.avatarURL1} />
                                      </CardMedia>

                                      <div className="innerItemCard">
                                              <h3> <strong> {this.state.title}  </strong> </h3>
                                              <br/>
                                              <h5> {this.state.describtion}</h5>
                                              <RaisedButton label={this.state.price} style={{ margin: 3}} />
                                              <RaisedButton label={this.state.category} style={{ margin: 3}} /><br/>
                                              <RaisedButton label="rating" style={{ margin: 3}} />
                                      </div>
                                    </Card>
                                      <br/><br/>

                                  </div>
                              </div>
                        </div>
                    </Card>

                </div>
            </MuiThemeProvider>
        )
    }
}

export default GeneralProfile;



