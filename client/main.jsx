'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Stores/AppStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index from 'components/Index/Index';
import ItemPreview from 'components/ItemPreview/ItemPreview';
import Downloads from 'components/Downloads/Downloads.jsx';
import Welcome from 'components/Welcome/Welcome.jsx';
import General from 'components/Product/General.jsx';
import ProductSearch from 'components/ProductSearch/ProductSearch.jsx';
import Root from 'components/Root/Root.js'
import checkout from 'components/checkout/checkout.jsx';
import ProductContent from 'components/ProductContent/ProductContent.jsx';
import Contact from 'components/Contact/Contact';
import MoreInfo from 'components/MoreInfo/MoreInfo';
import Policy from 'components/Policy/Policy.jsx';
import About from 'components/About/About.jsx';
import Impressum from 'components/Impressum/Impressum.jsx';

import AdminContainer from './containers/Admin';

render(<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Welcome}/>
        <Route path="/INDEX" component={Index}/>
        <Route path="ItemPreview/:productid" component={ItemPreview}/>
        <Route path="General" component={General}/>
        <Route path="market" component={ProductSearch}/>
        <Route path="profile" component={Downloads}/>
        <Route path="Support" component={Contact}/>
        <Route path="MoreInfo" component={MoreInfo}/>
        <Route path="Policy" component={Policy}/>
        <Route path="About" component={About}/>
        <Route path="Impressum" component={Impressum}/>
        <Route path="EditProduct/:productid" component={General}/>
        <Route path="ProductContent/:productid" component={ProductContent}/>
        <Route path="core" component={AdminContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('js-main'));


