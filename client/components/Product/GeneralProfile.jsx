import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
var FileInput = require('react-file-input');
import FileUploader from 'react-firebase-file-uploader';
import Flexbox from 'flexbox-react';
import { currentuserid, submitProductGeneralDetails, productCoreDetails } from '../../action/action.jsx';

function mapStateToProps(store) {
    return { userdetails: store.userdetails};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        currentuserid,
        submitProductGeneralDetails,
        productCoreDetails
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

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
        };

    }

    componentWillMount(){

        var ProductId = this.props.ProductId;

        if(this.props.validation == "RIGHTVALIDATION") {

            firebase.database().ref('ProductCoreDetails').orderByChild('ProductId').equalTo(ProductId).on("child_added", (snapshot) => {

                var productid= snapshot.val().ProductId;
                var Price= snapshot.val().Price;
                var Description= snapshot.val().Description;
                var Mainimage= snapshot.val().mainImage;
                var Title= snapshot.val().Title;
                var Subimage= snapshot.val().subImage;
                var SubTitle= snapshot.val().Subtitle;
                var category= snapshot.val().category;

                this.setState({
                    title :Title,
                    subtitle:SubTitle,
                    describtion:category,
                    price:Price,
                    category:category,
                    avatarURL:Mainimage,
                    avatarURL1:Subimage,
                });
            });
        }

        else{
            var title = '';
            var subtitle= '';
            var describtion= '';
            var price= '';
            var category= '';
            var avatarURL = '';
            var avatarURL1 = '';


            this.setState({
                title :title,
                subtitle:subtitle,
                describtion:category,
                price:price,
                category:category,
                avatarURL:avatarURL,
                avatarURL1:avatarURL1,
            });

        }

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
        var UserIdobject = this.props.userdetails.userid;
        var UserId = Object.keys(UserIdobject).map(key => UserIdobject[key]);

        if(title == '' || subtitle == '' || describtion == '' || price == '' || category == ''|| url == ''|| url1 == ''){
            this.setState({
                Error:"Please fill Every Detail",
            });
        }
        else {

            var ProductId = this.props.ProductId;

            this.props.submitProductGeneralDetails(ProductId,title,subtitle,describtion,price,category,url,url1,UserIdobject,UserId);

        }

    }

    handleUploadStart = () => this.setState({isUploading: true, progress: 0});
    handleProgress = (progress) => this.setState({progress});
    handleUploadError = (error) => {
      this.setState({isUploading: false});
      console.error(error);
    };
    handleUploadSuccess = (filename) => {
      this.setState({avatar: filename, progress: 100, isUploading: false});
      firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
    };

    handleUploadStart1 = () => this.setState({isUploading1: true, progress1: 0});
    handleProgress1 = (progress1) => this.setState({progress1});
    handleUploadError1 = (error) => {
      this.setState({isUploading1: false});
      console.error(error);
    };
    handleUploadSuccess1 = (filename) => {
      this.setState({avatar1: filename, progress1: 100, isUploading1: false});
      firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL1: url}));
    };

    render(){


        var style = {
            height : "300px",
        };

        return (
            <div className="Profiledata">
                <Card style={{marginRight: "1%", marginLeft: "1%", marginTop: 9}}>
                    <div className="product-tab" >
                      <div className="left-panel">
                          <div style={{marginTop: 25}}>
                            <p> This is the creation page! here you can interactivly create your content. Don't forget to save & publish your work </p>
                            </div>
                          <div className="warning">
                              {this.state.Error}
                          </div>

                            <div className="productdisplayleft">
                            <Card style={{padding: 20, backgroundColor: "white"}}>
                                      <input value={this.state.title} name="title" ref={(a) => this.title = a} type="text" className="inputfield-signup1" placeholder="Title" onChange={this.TiTle.bind(this)}/>
                                      <input value={this.state.subtitle} name="subtitle" ref={(c) => this.subTitle = c} type="text" className="inputfield-signup1" placeholder="sub-title" onChange={this.SubTitle.bind(this)}/><br/><br/>
                                 <FileUploader
                                        accept="image/*"
                                        name="avatar"
                                        randomizeFilename
                                        storageRef={firebase.storage().ref('images')}
                                        onUploadStart={this.handleUploadStart}
                                        onUploadError={this.handleUploadError}
                                        onUploadSuccess={this.handleUploadSuccess}
                                        onProgress={this.handleProgress} />

                                    <FileUploader
                                        accept="image/*"
                                        name="avatar"
                                        randomizeFilename
                                        storageRef={firebase.storage().ref('images')}
                                        onUploadStart={this.handleUploadStart1}
                                        onUploadError={this.handleUploadError1}
                                        onUploadSuccess={this.handleUploadSuccess1}
                                        onProgress={this.handleProgress1} />

                                      <select name="Category" ref={(ab) => this.Category = ab} className="inputfield-signup1" onChange={this.ProdctCategory.bind(this)}>
                                          <optgroup label="Category">
                                          <option value="Category">  Category </option>
                                              <option value="Machine-Learning">  Machine-Learning </option>
                                              <option value="Big-Data"> Big-Data </option>
                                              <option value="Algorithms">  Algorithms </option>
                                              <option value="Graphics">  Graphics </option>
                                              <option value="Other">  Other </option>
                                              <option value="Web or Shiny">  Web or Shiny </option>
                                          </optgroup>
                                      </select>

                                      <textarea value={this.state.describtion} name="textarea" ref={(d) => this.textarea = d} className="textarea1" placeholder="Description about Product"
                                                onChange={this.DescriPtion.bind(this)}/> <br/> <br/>
                                      <input value={this.state.price} name="Price" ref={(ef) => this.Price = ef}  type="text" className="inputfield-signup1"
                                      placeholder="Price in $"
                                      onChange={this.PriCe.bind(this)}/><br/><br/>
                            </Card>
                            <div className="product-header">
                              <RaisedButton onClick={this.SubMit.bind(this)} label=" Save" primary={true} style={{ margin: 12}}/>
                            </div>

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


                                  <Card className="product-search" style={{padding: 0}}>
                                      <img className="product_image" src={this.state.avatarURL1}/>
                                      <h5>{this.state.title}</h5>
                                      <h5> {this.state.describtion}</h5>
                                      <Flexbox flexDirection="row">
                                          <Flexbox flexGrow={1}>
                                              <RaisedButton label="rating" style={{ margin: 1, width: "100%"}} />
                                          </Flexbox>
                                          <Flexbox flexGrow={1}>
                                              <RaisedButton label={this.state.price} style={{ margin: 1, width: "100%"}} />
                                          </Flexbox>
                                          <Flexbox flexGrow={1}>
                                              <RaisedButton label="nr sold" style={{ margin: 1, width: "100%"}} />
                                          </Flexbox>
                                      </Flexbox>
                                </Card>
                                </Card>
                                <br/><br/>
                              </div>
                          </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default GeneralProfile;



