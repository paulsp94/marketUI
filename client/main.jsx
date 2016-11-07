'use strict';

import 'styles/main.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Index from 'components/Index/Index';
import Header from 'components/Header/Header';
import { browserHistory } from 'react-router';
import ProductPage from 'components/ProductPage/ProductPage';
import ProductOptions from 'components/ProductOptions/ProductOptions';
import ItemPreview from 'components/ItemPreview/ItemPreview';
import Downloads from 'components/Downloads/Downloads';
import General from 'components/Product/General.jsx';



  render(
      <Router history={hashHistory}>
          <Route path="/INDEX" component={Index}/>
          <Route path="ProductPage" component={ProductPage}/>
          <Route path="ProductOptions" component={ProductOptions}/>
          <Route path="ItemPreview" component={ItemPreview}/>
          <Route path="General" component={General}/>
          <Route path="/" component={Downloads}/>
      </Router>,
      document.getElementById('js-main'));


