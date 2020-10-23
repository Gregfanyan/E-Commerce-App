import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Car from './components/Car'
import { Home } from './pages/Home'
import SingleCountry from './pages/SingleCountry'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Car" component={Car} />
    <Route path="/country/:id" component={SingleCountry} />
  </Switch>
)

export default Routes
