import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'
import Login from '../components/user/Login'
import Register from '../components/user/Register'
import FirstPage from '../components/FirstPage'
import Categories from '../components/Categories'
import About from '../components/About'
import Products from '../pages/Products'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={FirstPage} />
    <Route path="/home" component={Home} />
    <Route path="/product/:id" component={SingleProduct} />
    <Route path="/Login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/categories" component={Categories} />
    <Route path="/about" component={About} />
    <Route path="/cart" component={Products} />
  </Switch>
)

export default Routes
