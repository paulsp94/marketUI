import React, {PropTypes} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import config from '../../config/index';

class StripeCheckoutComponent extends React.Component {
  static displayName = 'StripeCheckoutComponent';

  constructor(props, context) {
    super(props, context);
    this._tokenHandler = this._tokenHandler.bind(this);
  }

  _tokenHandler(token) {
    let {amount, sellerId} = this.props;

    axios.post(config['stripe']['checkoutUrl'], {
      token: token.id,
      amount: amount,
      sellerId: sellerId
    }).then((response) => {
      // TODO Handle the successful payment based on UI design
      alert('Payment was successful');
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
        token={this._tokenHandler}
        amount={amount}
        currency="USD"
        stripeKey={config['stripe']['publishableKey']}/>
    )
  }
}

StripeCheckoutComponent.propTypes = {
  /**
   * Holds the amount to be paid, in cents
   * */
  amount: PropTypes.number.isRequired,
  /**
   * Holds the id of the seller
   * */
  sellerId: PropTypes.string.isRequired
};

export default StripeCheckoutComponent;
