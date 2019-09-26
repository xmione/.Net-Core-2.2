import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
//import OwnerList from './Owner/OwnerList/OwnerList';
//import asyncComponent from '../hoc/AsyncComponent/AsyncComponent';
import QuotePage from '../components/quote-list/QuotePage';
import CalculatorPage from '../components/quote-calculator/CalculatorPage';

// const AsyncOwnerList = asyncComponent(() => {
//   return import('./Owner/OwnerList/OwnerList');
// });

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/quote-calculator" component={CalculatorPage} />
            <Route path="/quote-list" component={QuotePage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
