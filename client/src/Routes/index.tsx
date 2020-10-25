import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* import Car from '../components/Car'
 */ import { Home } from '../pages/Home'
import SingleCountry from '../pages/SingleCountry'
import Login from '../components/user/Login'
import Register from '../components/user/Register'
import FirstPage from '../components/FirstPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={FirstPage} />
    <Route path="/home" component={Home} />
    {/*     <Route path="/Car" component={Car} />
     */}{' '}
    <Route path="/country/:id" component={SingleCountry} />
    <Route path="/Login" component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
)

export default Routes
