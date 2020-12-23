import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'
import Login from '../components/user/Login'
import Register from '../components/user/Register'
import FirstPage from '../components/FirstPage'
import ProductCart from '../pages/ProductCart'
import AddProduct from '../components/AddProduct'
import Users from '../components/Users'
import Profile from '../pages/Profile'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={FirstPage} />
    <Route path="/home" component={Home} />
    <Route path="/product/:id" component={SingleProduct} />
    <Route path="/Login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/cart" component={ProductCart} />
    <Route path="/AddProduct" component={AddProduct} />
    <Route path="/users" component={Users} />
    <Route path="/profile" component={Profile} />
  </Switch>
)

export default Routes
