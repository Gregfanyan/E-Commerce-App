import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Routes
