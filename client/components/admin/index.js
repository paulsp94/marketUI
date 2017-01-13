import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import LazyLoad from 'react-lazyload';
import {Card} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Flexbox from 'flexbox-react';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';
import StarRatingComponent from 'react-star-rating-component';

class AdminComponent extends React.Component {
  static displayName = 'AdminComponent';

  constructor(props, context) {
    super(props, context);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this._fetchProducts();
  }

  _fetchProducts() {
    firebase
      .database()
      .ref('ProductCoreDetails')
      .once('value')
      .then((snapshot) => {
        let response = snapshot.val();
        let products = [];

        for (let productKey of Object.keys(response)) {
          let product = response[productKey];
          if(product.status != 'saved') {
            products.push(response[productKey]);
          }
        }
        this.setState({products: products});
      });
  }

  _toggleHandler(productId) {
    firebase
      .database().ref(`ProductCoreDetails/${productId}`)
      .once('value')
      .then((snapshot) => {
        let details = snapshot.val();
        details.status = details.status === 'published' ? 'submitted' : 'published';
        firebase.database()
          .ref(`ProductCoreDetails/${productId}`)
          .set(details)
          .then(() => {
            this._fetchProducts();
          })
      })
  }

  _clickHandler(product) {
    browserHistory.push('EditProduct/'+ product.ProductId);
  }

  render() {

    return (
      <div className="admin">
        {
          this.state.products.map((product, index) => {
            return (
              <div className="product-details" key={index} >
                <Card className="product-search">
                  <LazyLoad height={'150px'} resize={true} offset={[200, 200]}>
                    <img className="product_image" onClick={() => { this._clickHandler(product) }} src={product.subImage}/>
                  </LazyLoad>
                  <h5 style={{height: '35px'}}>{product.Title}</h5>
                  <h5 style={{height: '35px'}}>{product.Description}</h5>
                  <Flexbox flexDirection="row">
                    <Flexbox flexGrow={1}>
                      <RaisedButton label={`${product.Price || 0}`} style={{ margin: 1, width: "100%"}}/>
                    </Flexbox>
                    <Flexbox flexGrow={1} marginTop={'10px'} marginLeft={'12px'}>
                      <StarRatingComponent
                        name="rating" /* name of the radio input, it is required */
                        value={parseInt(product.rating) || 0} /* number of selected icon (`0` - none, `1` - first) */
                        editing={false}
                      />
                    </Flexbox>
                    <Flexbox flexGrow={1}>
                      <RaisedButton label={`${product.downloadCount || 0}`} style={{ margin: 1, width: "100%"}}/>
                    </Flexbox>
                  </Flexbox>
                  <Flexbox flexDirection="row" className="action-container">
                    <Flexbox flexGrow={1}>
                      <RaisedButton
                        className="raised-btn"
                        label={product.status === 'published' ? 'Published' : 'Not Published'}/>
                    </Flexbox>
                    <Flexbox flexGrow={1}>
                      <Toggle
                        onToggle={() => {
                          this._toggleHandler(product.ProductId)
                        }}
                        className="status-toggle"
                        defaultToggled={product.status === 'published'}
                        labelPosition="left"
                        label="Action"
                      />
                    </Flexbox>
                  </Flexbox>
                </Card>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default AdminComponent;
