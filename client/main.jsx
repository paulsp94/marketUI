'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Stores/AppStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ItemPreview from 'components/ProductPreview/ItemPreview';
import Downloads from 'components/Profile/Downloads.jsx';
import Welcome from 'components/Welcome/Welcome.jsx';
import General from 'components/ProductCreation/General.jsx';
import ProductSearch from 'components/ProductSearch/ProductSearch.jsx';
import Root from 'components/Root/Root.js'
import ProductContent from 'components/ProductContent/ProductContent.jsx';
import Contact from 'components/More/Contact';
import MoreInfo from 'components/More/MoreInfo';
import Policy from 'components/More/Policy.jsx';
import About from 'components/More/About.jsx';
import Impressum from 'components/More/Impressum.jsx';
import ContentInfo from 'components/More/ContentInfo.jsx'
import AdminContainer from './containers/Admin';
var ReactGA = require('react-ga');
ReactGA.initialize('UA-82192877-3');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

render(<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Welcome} onUpdate={logPageView}/>
        <Route path="ItemPreview/:productid" component={ItemPreview} onUpdate={logPageView}/>
        <Route path="ContentCreation" component={General} onUpdate={logPageView}/>
        <Route path="Market" component={ProductSearch} onUpdate={logPageView}/>
        <Route path="Profile" component={Downloads}/>
        <Route path="Support" component={Contact}/>
        <Route path="MoreInfo" component={MoreInfo}/>
        <Route path="Policy" component={Policy}/>
        <Route path="About" component={About}/>
        <Route path="Impressum" component={Impressum}/>
        <Route path="EditProduct/:productid" component={General}/>
        <Route path="ProductContent/:productid" component={ProductContent}/>
        <Route path="Create" component={ContentInfo}/>
        <Route path="Core" component={AdminContainer}/>
        <Route path="*" status={404} component={Welcome}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('js-main'));