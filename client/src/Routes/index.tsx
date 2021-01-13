import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'
import Login from '../components/user/Login'
import Register from '../components/user/Register'
import StartPage from '../components/StartPage'
import ProductCart from '../pages/ProductCart'
import AddProduct from '../components/AddProduct'
import Users from '../pages/Users'
import { useProduct } from '../Hooks/useProduct'
import Navbar from '../components/Navbar'
import Profile from '../pages/Profile'
import Footer from '../components/Footer'

const Routes = () => {
  const [query, setQuery] = useState<string>('')
  const [cat, setCat] = useState<string>('')
  const [data] = useProduct(query, cat)
  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.currentTarget.value)
  }

  const handleSelect: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setCat(e.currentTarget.value)
  }
  return (
    <>
      <Navbar
        handleChange={handleChange}
        search={query}
        product={data}
        handleSelect={handleSelect}
        cat={cat}
      />
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route
          exact
          path="/home"
          component={() => <Home data={data} cat={cat} search={query} />}
        ></Route>
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cart" component={ProductCart} />
        <Route path="/AddProduct" component={AddProduct} />
        <Route path="/users" component={Users} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/footer" component={Footer} />
      </Switch>
    </>
  )
}
export default Routes
