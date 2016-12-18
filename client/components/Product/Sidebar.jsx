import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import MaterialTagsInput from '../_common/MaterialTagsInput';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import RaisedButton from 'material-ui/RaisedButton';
import {
  currentuserid,
  submitProductsidebarDetails,
  submitPublishedproducts
} from '../../action/action.jsx'

function mapStateToProps (store) {
  return { userdetails: store.userdetails };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    currentuserid,
    submitProductsidebarDetails,
    submitPublishedproducts
  }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class ProductSidebar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      packages: [],
      complexity: 5,
      integrationTime: "15 min",
      compatibility: [],
      tags: []
    };
  }

  componentWillMount () {
    this.props.currentuserid();

      var ProductId = this.props.ProductId;

      if(this.props.validation == "RIGHTVALIDATION") {

          firebase.database().ref('ProductSidebar').orderByChild('Productid').equalTo(ProductId).once("child_added", (snapshot) => {

              var IntegrationTime = snapshot.val().IntegrationTime;
              var Packages = snapshot.val().Packages;
              var compatibility = snapshot.val().compatibility;
              var complexity = snapshot.val().complexity;
              var tags = snapshot.val().tags;

              this.setState({
                  packages: Packages,
                  complexity: complexity,
                  integrationTime: IntegrationTime,
                  compatibility: compatibility,
                  tags: tags,
              })
          });
      }

      else {

          var IntegrationTime = '';
          var Packages = [];
          var compatibility = [];
          var complexity = '';
          var tags = [];

          this.setState({
              packages: Packages,
              complexity: complexity,
              integrationTime: IntegrationTime,
              compatibility: compatibility,
              tags: tags,
          })

      }


  }

  onPackagesChange = (packages) => {
    this.setState({ packages })
  };

  onComplexityChange = (event, index, value) => {
    this.setState({ complexity: value });
  };

  onIntegrationTimeChange = (event, index, value) => {
    this.setState({ integrationTime: value });
  };

  onCompatibilityChange = (compatibility) => {
    this.setState({ compatibility })
  };

  onTagsChange = (tags) => {
    this.setState({ tags })
  };

  subMit () {
    var packages = this.state.packages;
    var complexity = this.state.complexity;
    var integrationTime = this.state.integrationTime;
    var compatibility = this.state.compatibility;
    var tags = this.state.tags;

    var ProductId = this.props.ProductId;

    this.props.submitProductsidebarDetails(packages, complexity, integrationTime, compatibility, tags, ProductId);

  };

  Publish () {

    var ProductId = this.props.ProductId;
    var UserIdobject = this.props.userdetails.userid;
    var UserId = Object.keys(UserIdobject).map(key => UserIdobject[key]);
    UserId = UserId[0];

    this.props.submitPublishedproducts(ProductId, UserId);

  };

  render () {

    if (this.props.userdetails.publishedproduct == false) {
      var message = '';
    }
    else {
      var message = this.props.userdetails.publishedproduct.submitDetails;
      console.log(message);
    }

    const { packages, complexity, integrationTime, compatibility, tags } = this.state;
    return (
      <div className="product-tab">
        <div className="left-panel">

          <Card style={{ margin: '10px auto', width: 550 }}>
            <div className="warning">
              {message}
            </div>
            <CardTitle
              title="Sidebar"
              subtitle="Here you can specify product details"
            />

            <CardText>
              {/* packages */}
              <MaterialTagsInput
                value={packages}
                onChange={this.onPackagesChange.bind(this)}
                label="Packages"
              />

              {/* complexity */}
              <SelectField
                floatingLabelText="Complexity"
                value={complexity}
                onChange={this.onComplexityChange.bind(this)}
                autoWidth={false}
              >
                <MenuItem value={1} primaryText="1/10"/>
                <MenuItem value={2} primaryText="2/10"/>
                <MenuItem value={3} primaryText="3/10"/>
                <MenuItem value={4} primaryText="4/10"/>
                <MenuItem value={5} primaryText="5/10"/>
                <MenuItem value={6} primaryText="6/10"/>
                <MenuItem value={7} primaryText="7/10"/>
                <MenuItem value={8} primaryText="8/10"/>
                <MenuItem value={9} primaryText="9/10"/>
                <MenuItem value={10} primaryText="10/10"/>
              </SelectField>

              <SelectField
                floatingLabelText="Integration Time"
                value={integrationTime}
                onChange={this.onIntegrationTimeChange.bind(this)}
                autoWidth={false}
              >
                <MenuItem value={"15 min"} primaryText="15 min"/>
                <MenuItem value={"30 min"} primaryText="30 min"/>
                <MenuItem value={"45 min"} primaryText="45 min"/>
                <MenuItem value={"< 1 hour"} primaryText="< 1 hour"/>
                <MenuItem value={"< 2 hours"} primaryText="< 2 hours"/>
                <MenuItem value={"> 2 hours"} primaryText="> 2 hours"/>
                <MenuItem value={"> 5 hours"} primaryText="> 5 hours"/>
              </SelectField>


              {/* compatibility */}
              <MaterialTagsInput
                value={compatibility}
                onChange={this.onCompatibilityChange.bind(this)}
                label="Compatibility"
              />

              {/* tags */}
              <MaterialTagsInput
                value={tags}
                onChange={this.onTagsChange.bind(this)}
                label="Tags"
              />
            </CardText>

            <RaisedButton onClick={this.subMit.bind(this)} label=" Save" style={{ margin: 12 }}/>
            <RaisedButton onClick={this.Publish.bind(this)} label="Publish" style={{ margin: 12 }}/>


          </Card>
        </div>

        <div className="right-panel">

          <Card style={{ width: 500, marginLeft: "25%", marginTop: "5%" }}>
            <Card>
              {/* Packages */}
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <h4><strong>Packages:</strong></h4>
                {packages.map((item, index) =>
                  <Chip key={index} style={{ float: "left", margin: 4 }}>{item}</Chip>
                )}
              </div>
            </Card>

            <div style={{ flexWrap: 'wrap', margin: 9 }}>
              <h4><strong>Complexity:</strong></h4>
              <p>{complexity}/10</p>

              <h4><strong>Integration Time:</strong></h4>
              <p>{integrationTime}</p>
            </div>

            <Card>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <h4><strong>Compatibilty:</strong></h4>
                {compatibility.map((compatibility, index) =>
                  <Chip key={index} style={{ float: "left", margin: 4 }}>{compatibility}</Chip>
                )}
              </div>
            </Card>

            <div style={{ flexWrap: "wrap", margin: 9 }}>
              <h4 ><strong> Maintenance: </strong></h4>
              <h5> 5 Versions</h5>
              <p > Last Updated 20-11-2015 </p>
            </div>

            <Card>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <h4><strong>Tags:</strong></h4>
                {tags.map((tag, index) =>
                  <Chip key={index} style={{ float: "left", margin: 4 }}>{tag}</Chip>
                )}
              </div>
            </Card>
          </Card>

        </div>

      </div>
    )
  }
}

export default ProductSidebar;

