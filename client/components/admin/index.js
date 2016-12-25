import React, {PropTypes} from 'react';
import LazyLoad from 'react-lazyload';
import {Card} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import {Snackbar} from 'material-ui/Snackbar';
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

        for(let productKey of Object.keys(response)) {
          products.push(response[productKey]);
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

  render() {

    return(
      <div>
        {
          this.state.products.map((product, index) => {
            return <div className="admin product-details" key={index} >
              <Card className="product-search">
                <LazyLoad height={'150px'} resize={true} offset={[200,200]} >
                  <img className="product_image" src={product.subImage} />
                </LazyLoad>
                <h5>{product.Title}</h5>
                <h5>{product.Description}</h5>
                <Flexbox flexDirection="row">
                  <Flexbox flexGrow={1} className="product-rating">
                    <StarRatingComponent
                      name="rating" /* name of the radio input, it is required */
                      value={product.rating || 0} /* number of selected icon (`0` - none, `1` - first) */
                      editing={false}
                    />
                  </Flexbox>
                  <Flexbox flexGrow={1}>
                    <RaisedButton className="raised-btn" label={`${product.Price || 0}`} />
                  </Flexbox>
                  <Flexbox flexGrow={1}>
                    <RaisedButton className="raised-btn" label={`${product.downloadCount || 0}`} />
                  </Flexbox>
                </Flexbox>
                <Flexbox flexDirection="row" className="action-container">
                  <Flexbox flexGrow={1}>
                    <RaisedButton
                      className="raised-btn"
                      label={product.status === 'published' ? 'Published' : 'Not Published'} />
                  </Flexbox>
                  <Flexbox flexGrow={1}>
                    <Toggle
                      onToggle={() => { this._toggleHandler(product.ProductId) }}
                      className="status-toggle"
                      defaultToggled = {product.status === 'published'}
                      labelPosition="left"
                      label="Action"
                      />
                  </Flexbox>
                </Flexbox>
              </Card>
            </div>
          })
        }
      </div>
    );
  }
}

export default AdminComponent;
