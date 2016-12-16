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

render(<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Welcome}/>
        <Route path="/INDEX" component={Index}/>
        <Route path="ItemPreview/:productid" component={ItemPreview}/>
        <Route path="General" component={General}/>
        <Route path="ProductSearch" component={ProductSearch}/>
        <Route path="profile" component={Downloads}/>
        <Route path="EditProduct/:productid" component={General}/>
          <Route path="ProductContent/:productid" component={ProductContent}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('js-main'));


