import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import FileUploader from 'react-firebase-file-uploader';
import Flexbox from 'flexbox-react';
import { currentuserid, submitProductGeneralDetails, productCoreDetails } from '../../action/action.jsx';
import StarRatingComponent from 'react-star-rating-component';

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
            price:"FREE",
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
            submitstatus:'',
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
                    describtion:Description,
                    price:'FREE',
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
            var price= 'FREE';
            var category= '';
            var avatarURL = '';
            var avatarURL1 = '';


            this.setState({
                title :title,
                subtitle:subtitle,
                describtion:describtion,
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
            title: title
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

    ProdctCategory = (event, index, value) => {
        //var category = this.Category.value;
        this.setState({category : value});
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
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        var today = mm+'/'+dd+'/'+yyyy;


        if(title == '' || subtitle == '' || describtion == '' || price == '' || category == ''|| url == ''|| url1 == ''|| title == undefined || subtitle == undefined || describtion == undefined || price == undefined || category == undefined || url == undefined|| url1 == undefined){
            this.setState({
                Error: "You probably forgot one item",
            });
        }
        else {

            var ProductId = this.props.ProductId;
            // this.props.submitProductGeneralDetails(ProductId,title,subtitle,describtion,price,category,url,url1,UserId);

            firebase.database().ref('ProductCoreDetails').child(ProductId).once("value", (snapshot) => {

                if(snapshot.exists()) {
                    var product = snapshot.val();
                    if (product.status === 'published') {

                        firebase.database().ref('ProductCoreDetails/' + ProductId).set({
                            ProductId: ProductId,
                            Title: title,
                            Subtitle: subtitle,
                            Description: describtion,
                            Price: price,
                            mainImage: url,
                            subImage: url1,
                            category: category,
                            status: 'published',
                            date:today,
                        });

                        firebase.database().ref("Product_creation/" + ProductId).set({
                            ProductId: ProductId,
                            userid: UserId[0],
                        });


                        this.setState({
                            submitstatus: "Successfully Saved!"
                        })

                    }
                    else {

                        firebase.database().ref('ProductCoreDetails/' + ProductId).set({
                            ProductId: ProductId,
                            Title: title,
                            Subtitle: subtitle,
                            Description: describtion,
                            Price: price,
                            mainImage: url,
                            subImage: url1,
                            category: category,
                            status: 'submitted',
                            date:today,
                        });

                        firebase.database().ref("Product_creation/" + ProductId).set({
                            ProductId: ProductId,
                            userid: UserId[0],
                        });


                        this.setState({
                            submitstatus: "Saved!"
                        })

                    }
                }

                else {

                    firebase.database().ref('ProductCoreDetails/' + ProductId).set({
                        ProductId: ProductId,
                        Title: title,
                        Subtitle: subtitle,
                        Description: describtion,
                        Price: price,
                        mainImage: url,
                        subImage: url1,
                        category: category,
                        status: 'submitted',
                        date:today,
                    });

                    firebase.database().ref("Product_creation/" + ProductId).set({
                        ProductId: ProductId,
                        userid: UserId[0],
                    });


                    this.setState({
                        submitstatus: "Saved!"
                    })

                }

            });

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
            imageInput: {
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              opacity: 0,
            },
        };

        return (
               /*<p>This is the creation page! here you can interactivly create your content. Don't forget to save & publish your work </p>*/
                <div className="product-tab" >
                    <div className="left-panel">

                          <Card style={{ margin: '10px auto', width: 550 }}>

                                 
                                 <CardText>
                                     <input className="inputfield-signup1" value={this.state.title} ref={(d) => this.title = d}  name="title" type="text" placeholder="Title" onChange={this.TiTle.bind(this)} />
                                     <input className="inputfield-signup1" value={this.state.subtitle} ref={(de) => this.subTitle = de}  name="subtitle" type="text"  placeholder="sub-title" onChange={this.SubTitle.bind(this)}/>

                                    {/*
                                     <FlatButton label="Choose Image" labelPosition="before" primary={true}>
                                      <input type="file" style={style.imageInput}
                                          accept="image/*"
                                          name="avatar"
                                          randomizeFilename
                                          storageRef={firebase.storage().ref('images')}
                                          onUploadStart={this.handleUploadStart}
                                          onUploadError={this.handleUploadError}
                                          onUploadSuccess={this.handleUploadSuccess}
                                          onProgress={this.handleProgress}  />
                                    </FlatButton> */}

                                    <br/><br/>
                                     <FileUploader
                                            accept="image/*"
                                            name="avatar"
                                            maxHeight={393}
                                            maxWidth={850}
                                            randomizeFilename
                                            storageRef={firebase.storage().ref('images')}
                                            onUploadStart={this.handleUploadStart}
                                            onUploadError={this.handleUploadError}
                                            onUploadSuccess={this.handleUploadSuccess}
                                            onProgress={this.handleProgress} 
                                            />
                                        <br/>
                                        <FileUploader
                                            accept="image/*"
                                            name="avatar"
                                            maxHeight={180}
                                            maxWidth={300}
                                            randomizeFilename
                                            storageRef={firebase.storage().ref('images')}
                                            onUploadStart={this.handleUploadStart1}
                                            onUploadError={this.handleUploadError1}
                                            onUploadSuccess={this.handleUploadSuccess1}
                                            onProgress={this.handleProgress1}
                                             />

                                        <SelectField
                                          floatingLabelText = "Category"
                                          value = {this.state.category}
                                          floatingLabelFixed={true}
                                          onChange = {this.ProdctCategory.bind(this)}>
                                            <MenuItem value="Choose the Category" primaryText="Choose the Category" />
                                          <MenuItem value="Machine-Learning" primaryText="Machine-Learning" />
                                          <MenuItem value="Big-Data" primaryText="Big-Data" />
                                          <MenuItem value="Algorithms" primaryText="Algorithms" />
                                          <MenuItem value="Graphics" primaryText="Graphics" />
                                          <MenuItem value="Other" primaryText="Other" />
                                          <MenuItem value="Web or Shiny" primaryText="Web or Shiny" />
                                        </SelectField>

                                        <textarea value={this.state.describtion} name="textarea" ref={(d) => this.textarea = d} className="textarea1" placeholder="Description about Product"
                                                    onChange={this.DescriPtion.bind(this)}/> <br/> <br/>

                                        {/* <input className="inputfield-signup1" value={this.state.price} ref={(d) => this.Price = d} name="Price" type="text" placeholder="Price in $" onChange={this.PriCe.bind(this)} />
                                        */}
                                        <input style={{}} className="inputfield-signup1" value="FREE" ref={(d) => this.Price = 'FREE'} name="Price" type="text" placeholder="Price in $" onChange={this.PriCe.bind(this)} />
                                        
                                        <div className="product-header">
                                          <RaisedButton onClick={this.SubMit.bind(this)} label=" Save" primary={true} style={{ margin: 12}}/>
                                        <div >
                                             {this.state.Error}
                                        </div>
                                            {this.state.submitstatus}
                                        </div>
                                    </CardText>
                            </Card>
                      </div>

                      <div className="right-panel">
                          <div className="container2">
                                  <CardMedia
                                      overlay={<CardTitle title={this.state.title} subtitle={this.state.subtitle}/>}>
                                        <img style = {{height: 393}} src={this.state.avatarURL} />
                                  </CardMedia>
                                  </div>

                              <div className="itemCard">
                                <Card>
                                  <Card className="product-search" style={{padding: 0}}>
                                      <img className="product_image" src={this.state.avatarURL1}/>
                                      
                                      <Flexbox flexDirection="row">
                                          <Flexbox flexGrow={1}>
                                              <RaisedButton label="FREE" style={{ margin: 1, width: "100%"}} />
                                          {/*
                                              <RaisedButton label={`${this.state.price || 0}`} style={{ margin: 1, width: "100%"}} />
                                          */}
                                        </Flexbox>
                                         <Flexbox flexGrow={1} style={{marginLeft: 10, marginTop: 12}}>
                                            <StarRatingComponent
                                            name="rating"
                                            value={5} /* number of selected icon (`0` - none, `1` - first) */
                                            editing={false}
                                             />
                                            
                                          </Flexbox>
                                          <Flexbox flexGrow={1}>
                                              <RaisedButton label="0" style={{ margin: 1, width: "100%"}} />
                                          </Flexbox>
                                      </Flexbox>
                                      <h5>{this.state.title}</h5>
                                      <p style={{height: '48px'}}> {this.state.describtion}</p>
                                </Card>
                                </Card>
                                <br/><br/>
                              </div>
                          </div>
                    </div>

        )
    }
}

export default GeneralProfile;
