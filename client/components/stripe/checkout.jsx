import React, {PropTypes, contextTypes} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import firebase from 'firebase';

import config from '../../config/index';

class StripeCheckoutComponent extends React.Component {
  static displayName = 'StripeCheckoutComponent';

  constructor(props, context) {
    super(props, context);
    this._tokenHandler = this._tokenHandler.bind(this);
  }

  _tokenHandler(token) {
    let {amount, sellerId, productId} = this.props;

    axios.post(config['stripe']['checkoutUrl'], {
      token: token.id,
      amount: amount,
      sellerId: sellerId,
      productId: productId,
      buyerId: firebase.auth().currentUser.uid
    }).then((response) => {
      this.context.router.push('/profile');
    }).catch(err => {
      console.error('[Stripe]', typeof err, err);
      // TODO Handle payment errors based on UI design
      alert('Could not process the payment due to ' + err);
    });
  }

  render() {
    let {amount} = this.props;

    return (
      <StripeCheckout
        //email="makeawish880@gmail.com" // TODO pass down user email here if needs to be prefilled
        token={this._tokenHandler}
        amount={amount}
        name="Rscript.Market"
        bitcoin
        alipay
        currency="USD"
        stripeKey={config['stripe']['publishableKey']}>
        <button className="btn btn-primary">
         Buy with Card or Bitcoin
        </button>
        </StripeCheckout>
    )
  }
}

StripeCheckoutComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};

StripeCheckoutComponent.propTypes = {
  /**
   * Holds the amount to be paid, in cents
   * */
  amount: PropTypes.number.isRequired,
  /**
   * Holds the id of the seller
   * */
  sellerId: PropTypes.string.isRequired,
  /**
   * Holds the id of the published product
   * */
  productId: PropTypes.string.isRequired
};

export default StripeCheckoutComponent;
