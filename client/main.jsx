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
import ReactGA from 'react-ga';
ReactGA.initialize('UA-82192877-3');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

render(<Provider store={store}>
    <Router onUpdate={logPageView} history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Welcome} onUpdate={logPageView}/>
        <Route path="ItemPreview/:productid" component={ItemPreview} onUpdate={logPageView}/>
        <Route path="ContentCreation" component={General} onUpdate={logPageView}/>
        <Route path="Market" component={ProductSearch} onUpdate={logPageView}/>
        <Route path="Profile" component={Downloads} onUpdate={logPageView}/>
        <Route path="Support" component={Contact} onUpdate={logPageView}/>
        <Route path="MoreInfo" component={MoreInfo} onUpdate={logPageView}/>
        <Route path="Policy" component={Policy} onUpdate={logPageView}/>
        <Route path="About" component={About} onUpdate={logPageView}/>
        <Route path="Impressum" component={Impressum} onUpdate={logPageView}/>
        <Route path="EditProduct/:productid" component={General} onUpdate={logPageView}/>
        <Route path="ProductContent/:productid" component={ProductContent} onUpdate={logPageView}/>
        <Route path="Create" component={ContentInfo} onUpdate={logPageView}/>
        <Route path="Core" component={AdminContainer} onUpdate={logPageView}/>
        <Route path="*" status={404} component={Welcome} onUpdate={logPageView}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('js-main'));