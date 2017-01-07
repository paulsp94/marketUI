import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { currentuserid, submitProductGeneralDetails, productCoreDetails } from '../../action/action.jsx';
// Firebase
var firebase = require('firebase');
import FileUploader from 'react-firebase-file-uploader';
import firebase_details from '../../Firebase/Firebase';
// Material-UI
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
// TODO: Ad CircularProgress while images are loading
// import CircularProgress from 'material-ui/CircularProgress';
// External
var FileInput = require('react-file-input');


import Flexbox from 'flexbox-react';
import StarRatingComponent from 'react-star-rating-component';

function mapStateToProps(store) {
  return {
    userdetails: store.userdetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    currentuserid,
    submitProductGeneralDetails,
    productCoreDetails
  }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class GeneralProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: "",
      description: "",
      price: "",
      category: '',
      username: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: '',
      avatar1: '',
      isUploading1: false,
      progress1: 0,
      avatarURL1: '',
      submitError: "",
      submitStatus: '',
    };
  }

  componentWillMount() {
    const { ProductId } = this.props;

    if (this.props.validation == "RIGHTVALIDATION") {
      firebase.database()
        .ref('ProductCoreDetails')
        .orderByChild('ProductId')
        .equalTo(ProductId)
        .on("child_added", (snapshot) => {
          this.setState({
            title: snapshot.val().Title,
            subtitle: snapshot.val().Subtitle,
            description: snapshot.val().Description,
            price: 'FREE',
            category: snapshot.val().category,
            avatarURL: snapshot.val().mainImage,
            avatarURL1: snapshot.val().subImage
          });
      });
    } else {
      this.setState({
        title: '',
        subtitle: '',
        description: '',
        price: 0,
        category: '',
        avatarURL: '',
        avatarURL1: '',
      });

    }
  }

  onTitleChange = (event, value) => {
    this.setState({
      title: value
    })
  };

  onSubtitleChange = (event, value) => {
    this.setState({
      subtitle: value
    })
  };

  onCategoryChange = (event, index, value) => {
    this.setState({
      category: value
    });
  };

  onDescriptionChange = (event, value) => {
    this.setState({
      description: value
    });
  };

  onPriceChange = (event, value) => {
    this.setState({
      price: value
    });
  };

  onSubmit = () => {
    var title = this.state.title;
    var subtitle = this.state.subtitle;
    var description = this.state.description;
    var price = this.state.price;
    var category = this.state.category;
    var url = this.state.avatarURL;
    var url1 = this.state.avatarURL1;
    var UserIdobject = this.props.userdetails.userid;
    var UserId = Object.keys(UserIdobject).map(key => UserIdobject[key]);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; // January is 0!
    var yyyy = today.getFullYear();
    var datenumber = today.getTime();

    if(dd<10) {
      dd='0'+dd
    }
    if(mm<10) {
      mm='0'+mm
    }

    var today = mm+'/'+dd+'/'+yyyy;

 {
      const { ProductId } = this.props;
      // this.props.submitProductGeneralDetails(ProductId,title,subtitle,description,price,category,url,url1,UserId);

      firebase.database()
        .ref('ProductCoreDetails')
        .child(ProductId)
        .once("value", (snapshot) => {

        if(snapshot.exists()) {
          const product = snapshot.val();

          if (product.status === 'published') {
            firebase.database()
              .ref('ProductCoreDetails/' + ProductId)
              .set({
                ProductId: ProductId,
                Title: title,
                Subtitle: subtitle,
                Description: description,
                Price: price,
                mainImage: url,
                subImage: url1,
                category: category,
                status: 'published',
                date:today,
                  datenumber:datenumber,
              });

            firebase.database()
              .ref("Product_creation/" + ProductId)
              .set({
                ProductId: ProductId,
                userid: UserId[0],
              });

            this.setState({
              submitStatus: "Successfully Saved!"
            })
          } else {
            firebase.database()
              .ref('ProductCoreDetails/' + ProductId)
              .set({
                ProductId: ProductId,
                Title: title,
                Subtitle: subtitle,
                Description: description,
                Price: price,
                mainImage: url,
                subImage: url1,
                category: category,
                status: 'submitted',
                date:today,
                  datenumber:datenumber,
              });

            firebase.database()
              .ref("Product_creation/" + ProductId)
              .set({
                ProductId: ProductId,
                userid: UserId[0],
              });

            this.setState({
              submitStatus: "Saved!"
            })
          }

        } else {
          firebase.database()
            .ref('ProductCoreDetails/' + ProductId)
            .set({
              ProductId: ProductId,
              Title: title,
              Subtitle: subtitle,
              Description: description,
              Price: price,
              mainImage: url,
              subImage: url1,
              category: category,
              status: 'submitted',
              date:today,
                datenumber:datenumber,
            });

          firebase.database()
            .ref("Product_creation/" + ProductId)
            .set({
              ProductId: ProductId,
              userid: UserId[0],
            });

          this.setState({
            submitStatus: "Saved!"
          })
        }
      });
    }
  };

  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  };
  handleUploadSuccess = (filename) => {
    this.setState({avatar: filename, progress: 100, isUploading: false});
    firebase.storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({avatarURL: url}));
  };

  handleUploadStart1 = () => this.setState({isUploading1: true, progress1: 0});
  handleProgress1 = (progress1) => this.setState({progress1});
  handleUploadError1 = (error) => {
    this.setState({isUploading1: false});
    console.error(error);
  };
  handleUploadSuccess1 = (filename) => {
    this.setState({avatar1: filename, progress1: 100, isUploading1: false});
    firebase.storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({avatarURL1: url}));
  };

  render(){
    const { title, subtitle, category, description, price, avatar, avatar1 } = this.state;

    return (
      <div className="product-tab" >
        <div className="left-panel">

          <Card className="generalTabCard" style={{ margin: '10px auto', width: 550 }}>
            <CardText>

              {/* title */}
              <TextField
                floatingLabelText="Title"
                fullWidth
                value={this.state.title}
                onChange={this.onTitleChange}
              />

              {/* subtitle */}
              <TextField
                floatingLabelText="Sub-Title"
                value={subtitle}
                fullWidth
                onChange={this.onSubtitleChange}
              />
              <br/>
              <br/>
              {/* avatar */}
              <RaisedButton
                label={!avatar ? 'Choose Large Image' : 'Change Large Image'}
                labelPosition="before"
                labelStyle={{'fontSize': '13px'}}
                containerElement="label"
                primary={!!avatar}
                secondary={!avatar}
                style={{marginRight: 10}}
              >
                <div className="file-input-wrapper">
                  <FileUploader
                    className="inner-file-input"
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
                </div>
              </RaisedButton>

              {/* avatar1 */}
              <RaisedButton
                label={!avatar1 ? 'Choose Small Image' : 'Change Small Image'}
                labelPosition="before"
                labelStyle={{'fontSize': '13px'}}
                containerElement="label"
                primary={!!avatar1}
                secondary={!avatar1}
              >
                <div className="file-input-wrapper">
                  <FileUploader
                    className="inner-file-input"
                    accept="image/*"
                    name="avatar1"
                    maxHeight={180}
                    maxWidth={300}
                    randomizeFilename
                    storageRef={firebase.storage().ref('images')}
                    onUploadStart={this.handleUploadStart1}
                    onUploadError={this.handleUploadError1}
                    onUploadSuccess={this.handleUploadSuccess1}
                    onProgress={this.handleProgress1}
                  />
                </div>
              </RaisedButton>

              <br/>

              {/* category */}
              <SelectField
                floatingLabelFixed
                floatingLabelText="Category"
                value={category}
                onChange={this.onCategoryChange}
              >
                <MenuItem value="" primaryText="Choose the Category" />
                <MenuItem value="Machine-Learning" primaryText="Machine-Learning" />
                <MenuItem value="Big-Data" primaryText="Big-Data" />
                <MenuItem value="Algorithms" primaryText="Algorithms" />
                <MenuItem value="Graphics" primaryText="Graphics" />
                <MenuItem value="Other" primaryText="Other" />
                <MenuItem value="Web or Shiny" primaryText="Web or Shiny" />
              </SelectField>

              {/* description */}
              <TextField
                floatingLabelText="Description"
                value={description}
                fullWidth
                multiLine
                rows={1}
                rowsMax={5}
                onChange={this.onDescriptionChange}
              />

              {/* price */}
              <TextField
                type="number"
                step="1"
                min="0"
                floatingLabelText="Price in $ (BETA: everything is free)"
                value={price}
                fullWidth
                onChange={this.onPriceChange}
              />

              <div className="product-header">
                <RaisedButton onClick={this.onSubmit} label=" Save" primary={true} style={{ margin: 12}}/>
                <br/>
                <div className="warning" style={{margin:'20 0 0 100'}} >
                  {this.state.submitError}
                </div>
                {this.state.submitStatus}
              </div>
            </CardText>
          </Card>
        </div>

        <div className="right-panel">
          <div className="container2">
            <CardMedia
              overlay={
                <CardTitle title={title} subtitle={subtitle}/>
              }>
              <img className="fadeIn" style={{height: 393, width: 850}} src={this.state.avatarURL} />
            </CardMedia>
          </div>

          <div className="itemCard">
            <Card>
              <Card className="product-search" style={{padding: 0}}>
                <img className="product_image fadeIn" src={this.state.avatarURL1}/>

                <Flexbox flexDirection="row">
                  <Flexbox flexGrow={1}>
                    <RaisedButton label={!!parseFloat(price) ? '$' + price : 'FREE'} style={{ margin: 1, width: "100%"}} />
                  </Flexbox>
                  <Flexbox flexGrow={1} style={{marginLeft: 10, marginTop: 12}}>
                    <StarRatingComponent
                      name="rating"
                      value={5} /* number of selected icon (`0` - none, `1` - first) */
                      editing={false}
                    />

                  </Flexbox>
                  <Flexbox flexGrow={1}>
                    <RaisedButton label="0" style={{margin: 1, width: "100%"}} />
                  </Flexbox>
                </Flexbox>
                <h5>{title}</h5>
                <p style={{height: '48px'}}> {description}</p>
              </Card>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default GeneralProfile;
