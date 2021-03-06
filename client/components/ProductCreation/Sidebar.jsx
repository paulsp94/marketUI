import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import MaterialTagsInput from '../_common/MaterialTagsInput';
var firebase = require('firebase');
import firebase_details from '../../Firebase/Firebase';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
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

  constructor(props) {
    super(props);
    this.state = {
        packages: [],
        complexity: 5,
        integrationTime: "15 min",
        compatibility: [],
        tags: [],
        error: '',
        snackOpen: false
    };
  }

  componentWillMount() {
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
          })
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
    this.setState({ packages }, this.onSave);
  };

  onComplexityChange = (event, index, value) => {
    this.setState({ complexity: value }, this.onSave);
  };

  onIntegrationTimeChange = (event, index, value) => {
    this.setState({ integrationTime: value }, this.onSave);
  };

  onCompatibilityChange = (compatibility) => {
    this.setState({ compatibility }, this.onSave);
  };

  onTagsChange = (tags) => {
    this.setState({ tags }, this.onSave);
  };

  showSnackbar = () => {
    this.setState({
      snackOpen: true
    });
  };

  closeSnackbar = () => {
    this.setState({
      snackOpen: false
    });
  };

  ratingAndDownloads = () => {
    var ProductId = this.props.ProductId;
    firebase.database().ref('ProductCoreDetails/' + ProductId + '/Private').set({
      ratingState: "active"
    });

    firebase.database().ref('ProductCoreDetails/' + ProductId + '/Public').set({
      downloadCount: 0
    });
  }

  onSave = () => {
    try {
      var packages = this.state.packages || [];
      var complexity = this.state.complexity || '';
      var integrationTime = this.state.integrationTime || '';
      var compatibility = this.state.compatibility || [];
      var tags = this.state.tags || [];
      var ProductId = this.props.ProductId;

      this.props.submitProductsidebarDetails(packages, complexity, integrationTime, compatibility, tags, ProductId);
      this.showSnackbar();
    } catch(err) {
        console.log("error");
        this.setState({error: 'Saving Error!'});
    }
  };

  onSubmit = () => {
    var ProductId = this.props.ProductId;
    var UserIdobject = this.props.userdetails.userid;
    var UserId = Object.keys(UserIdobject).map(key => UserIdobject[key]);
    UserId = UserId[0];
    this.props.submitPublishedproducts(ProductId, UserId);
    this.showSnackbar();
    this.ratingAndDownloads();
  };

  render () {
    if (this.props.userdetails.publishedproduct == false) {
      var message = '';
    } else {
      var message = this.props.userdetails.publishedproduct.submitDetails;
    }

    const { packages, complexity, integrationTime, compatibility, tags } = this.state;

    return (

      <div className="product-tab">
        <div className="left-panel">

          <Card style={{ margin: '10px auto', width: 550 }}>
        
            <CardTitle
              title="Sidebar"
              subtitle="Here you can specify product details. Press enter after each tag"
            />

            <CardText>
              {/* packages */}

              <MaterialTagsInput
                value={packages || []}
                onChange={this.onPackagesChange}
                label="Packages"
              />

              {/* complexity */}
              <SelectField
                floatingLabelText="Complexity"
                floatingLabelFixed={true}
                value={complexity}
                onChange={this.onComplexityChange}
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
                floatingLabelFixed={true}
                value={integrationTime}
                onChange={this.onIntegrationTimeChange}
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
                value={compatibility || []}
                onChange={this.onCompatibilityChange}
                label="Compatibility"
              />

              {/* tags */}
              <MaterialTagsInput
                value={tags || []}
                onChange={this.onTagsChange}
                label="Tags"/>

            </CardText>

            <div className="text-right">
              <RaisedButton onClick={this.onSubmit} primary={true} label="Submit" style={{ margin: '12px'}} />
            </div>

            <div className="warning">{this.state.error}</div>
            <div>{message}</div>

          </Card>
        </div>

        <div className="right-panel">

          <Card style={{ width: 500, marginLeft: "25%", marginTop: "5%" }}>
            <Card>
              {/* Packages */}
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <h4><strong>Packages:</strong></h4>
                {packages && packages.map((item, index) =>
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
                {compatibility && compatibility.map((compatibility, index) =>
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
                {tags && tags.map((tag, index) =>
                  <Chip key={index} style={{ float: "left", margin: 4 }}>{tag}</Chip>
                )}
              </div>
            </Card>
          </Card>
        </div>

        <Snackbar
          open={this.state.snackOpen}
          message="Sidebar Saved!"
          autoHideDuration={3000}
          onRequestClose={this.closeSnackbar}
        />
        <Snackbar
          className="warning"
          open={!!this.state.error}
          message={this.state.error}
          autoHideDuration={3000}
          onRequestClose={() => this.setState({error: ''})}
        />
      </div>
    )
  }
}

export default ProductSidebar;
