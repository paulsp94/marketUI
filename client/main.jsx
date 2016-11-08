'use strict';
import 'styles/main.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Index from 'components/Index/Index';
import Header from 'components/Header/Header';
import { browserHistory } from 'react-router';
import ItemPreview from 'components/ItemPreview/ItemPreview';
import Downloads from 'components/Downloads/Downloads';
import General from 'components/Product/General.jsx';
import ProductSearch from 'components/ProductSearch/ProductSearch.jsx';
import registration from 'components/account/registration.jsx';
import login from 'components/account/login.jsx';
import logout from 'components/account/logout.jsx';

  render(
      <Router history={hashHistory}>
          <Route path="/INDEX" component={Index}/>
          <Route path="ItemPreview" component={ItemPreview}/>
          <Route path="General" component={General}/>
          <Route path="ProductSearch" component={ProductSearch}/>
          <Route path="registration" component={registration}/>
          <Route path="login" component={login}/>
          <Route path="logout" component={logout}/>
          <Route path="/" component={Downloads}/>
      </Router>,
      document.getElementById('js-main'));


