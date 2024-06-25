import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Discounts from "./components/Discount/Discounts";
import Reviews from "./components/Reviews/Reviews";
import ReviewsImage from "./components/Reviews/ReviewsImage";
import Catalogs from "./components/Catalog/Catalogs";
import SingleCatalog from "./components/Catalog/SingleCatalog";
import Cart from "./components/Cart/Cart";
import Account from "./components/Account/Account";
import AccountPassword from "./components/Account/AccountPassword";
import Order from "./components/Account/Order";
import Footer from "./components/Footer/Footer";
import Answers from "./components/Answers/Answers";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
       <Route path={'/'} element = {<Home />} />
       <Route path={'/login'} element = {<Login />} />
       <Route path={'/register'} element = {<Register />} />
       <Route path={'/discounts'} element = {<Discounts />} />
       <Route path={'/reviews'} element = {<Reviews />} />
       <Route path={'/reviews/image'} element = {<ReviewsImage />} />
       <Route path={'/catalogs'} element = {<Catalogs />} />
       <Route path={'/catalog/:id'} element = {<SingleCatalog />} />
       <Route path={'/account'} element = {<Account/>} />
       <Route path={'/account/change'} element = {<AccountPassword/>} />
       <Route path={'/account/orders'} element = {<Order/>} />
       <Route path={'/answers'} element = {<Answers/>} />
       <Route path={'/contact'} element = {<Contact/>} />
       <Route path={'/cart'} element = {<Cart/>} />

       </Routes>
       <Footer />
    </div>
  );
}

export default App;
