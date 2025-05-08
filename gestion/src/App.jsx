// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientsPage from './pages/ClientsPage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/clients" component={ClientsPage} />
        <Route path="/products" component={ProductsPage} />
      </Switch>
    </Router>
  );
};

export default App;
