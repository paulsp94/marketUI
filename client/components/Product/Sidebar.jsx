import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import MaterialTagsInput from '../_common/MaterialTagsInput';

class ProductSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      packages: [],
      complexity: 5,
      integrationTime: 1,
      compatibility: '',
      tags: []
    };
  }

  onPackagesChange = (packages) => {
    this.setState({packages})
  };

  onComplexityChange = (event, index, value) => {
    this.setState({complexity: value});
  };

  onCompatibilityChange = (event, value) => {
    this.setState({compatibility: value});
  };

  onIntegrationTimeChange = (event, value) => {
    this.setState({integrationTime: value});
  };

  onTagsChange = (tags) => {
    this.setState({tags})
  };

  render() {
    const { packages, complexity, integrationTime, compatibility, tags } = this.state;
    return (
      <MuiThemeProvider>
        <div className="product-tab">

          <div className="left-panel">
            <Card style={{margin: '10px auto', width: '80%'}}>
              <CardTitle
                title="Sidebar"
                subtitle="Here you can specify product details"
              />

              <CardText>
                {/* packages */}
                <MaterialTagsInput
                  value={packages}
                  onChange={this.onPackagesChange}
                  label="Packages"
                />

                {/* complexity */}
                <SelectField
                  floatingLabelText="Complexity"
                  value={complexity}
                  onChange={this.onComplexityChange}
                  autoWidth={true}
                  style={{width: '100%'}}
                >
                  <MenuItem value={1} primaryText="1/10" />
                  <MenuItem value={2} primaryText="2/10" />
                  <MenuItem value={3} primaryText="3/10" />
                  <MenuItem value={4} primaryText="4/10" />
                  <MenuItem value={5} primaryText="5/10" />
                  <MenuItem value={6} primaryText="6/10" />
                  <MenuItem value={7} primaryText="7/10" />
                  <MenuItem value={8} primaryText="8/10" />
                  <MenuItem value={9} primaryText="9/10" />
                  <MenuItem value={10} primaryText="10/10" />
                </SelectField>

                {/* integrationTime */}
                <TextField
                  type="number"
                  value={integrationTime || '0'}
                  onChange={this.onIntegrationTimeChange}
                  hintText=""
                  floatingLabelText="Integration Time"
                  floatingLabelFixed={true}
                  fullWidth={true}
                />

                {/* compatibility */}
                <TextField
                  value={compatibility}
                  onChange={this.onCompatibilityChange}
                  hintText=""
                  floatingLabelText="Compatibility"
                  floatingLabelFixed={true}
                  fullWidth={true}
                />

                {/* tags */}
                <MaterialTagsInput
                  value={tags}
                  onChange={this.onTagsChange}
                  label="Tags"
                />
              </CardText>

              <CardActions style={{textAlign: 'right'}}>
                <FlatButton label="Cancel" />
                <FlatButton label="Submit" />
              </CardActions>
            </Card>
          </div>

          <div className="right-panel">
            <Card style={{margin: '10px auto', width: '80%'}}>
              <CardText>
                {/* Packages */}
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  <h4><strong>Packages:</strong></h4>
                  {packages.map((item, index) =>
                    <Chip key={index} style={{float: "left", margin: 4}}>{item}</Chip>
                  )}
                </div>

                {/* Complexity */}
                <h4><strong>Complexity:</strong></h4>
                <p>{complexity}/10</p>

                {/* Integration Time */}
                <h4><strong>Integration Time:</strong></h4>
                <p>{integrationTime} hours</p>

                {/* Compatibilty */}
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  <h4><strong>Compatibilty:</strong></h4>
                  {compatibility
                    && <Chip style={{float: "left", margin: 4}}>{compatibility}</Chip>
                  }
                </div>

                {/* Maintenance */}
                <h4><strong>Maintenance:</strong></h4>
                <p>5 Versions</p>
                <p>Last Updated 20-11-2015</p>

                {/* Tags */}
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  <h4><strong>Tags:</strong></h4>
                  {tags.map((tag, index) =>
                    <Chip key={index} style={{float: "left", margin: 4}}>{tag}</Chip>
                  )}
                </div>
              </CardText>
            </Card>

          </div>

        </div>
      </MuiThemeProvider>
    )
  }
}

export default ProductSidebar;

