import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { Home } from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'
import Login from '../components/user/Login'
import Register from '../components/user/Register'
import StartPage from '../components/StartPage'
import ProductCart from '../pages/ProductCart'
import AddProduct from '../components/AddProduct'
import Users from '../pages/Users'
import { useProduct } from '../Hooks/useProduct'
import Profile from '../pages/Profile'
import Footer from '../components/Footer'
import UpdateProduct from '../pages/UpdateProduct'
import NavbarMenu from '../pages/NavbarMenu'
import Header from '../components/Header'

const Routes = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
	const [query, setQuery] = useState<string>('')
	const [cat, setCat] = useState<string>('')
	const [data] = useProduct(query, cat)
	const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
		setQuery(e.currentTarget.value)
		console.log('helol')
	}

	const handleSelect: React.ReactEventHandler<HTMLInputElement> = (e) => {
		setCat(e.currentTarget.value)
	}

	console.log('search from routes', query)

	return (
		<>
			<NavbarMenu
				handleChange={handleChange}
				search={query}
				product={data}
				handleSelect={handleSelect}
				cat={cat}
				isTabletOrMobile={isTabletOrMobile}
			/>
			<Switch>
				<Route exact path="/" component={StartPage} />
				<Route
					exact
					path="/home"
					component={() => (
						<Home
							data={data}
							cat={cat}
							search={query}
							handleChange={handleChange}
						/>
					)}
				></Route>
				<Route
					path="/header"
					component={() => (
						<Header handleChange={handleChange} search={query} />
					)}
				></Route>
				<Route
					path="/product/:id"
					component={() => (
						<SingleProduct isTabletOrMobile={isTabletOrMobile} />
					)}
				/>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route
					path="/cart"
					component={() => <ProductCart isTabletOrMobile={isTabletOrMobile} />}
				/>
				<Route path="/AddProduct" component={AddProduct} />
				<Route path="/users" component={Users} />
				<Route
					path="/profile"
					component={() => <Profile isTabletOrMobile={isTabletOrMobile} />}
				/>
				<Route exact path="/footer" component={Footer} />
				<Route
					path="/updateproduct/:id"
					component={() => <UpdateProduct product={data} />}
				/>
			</Switch>
		</>
	)
}
export default Routes
