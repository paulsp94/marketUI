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


  render(
      <Router history={hashHistory}>
          <Route path="/INDEX" component={Index}/>
          <Route path="ProductPage" component={ProductPage}/>
          <Route path="ProductOptions" component={ProductOptions}/>
          <Route path="/" component={ItemPreview}/>


      </Router>,
      document.getElementById('js-main'));


