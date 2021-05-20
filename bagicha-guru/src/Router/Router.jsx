import React from 'react'
import { Route, Switch } from 'react-router'
import Cart from '../Components/Cart/Cart'
import Footer from '../Components/Footer/Footer'
import Homepage from '../Components/Landingpage/Homepage'
import User from '../Components/User/User'
import Wishlist from '../Components/Wishlist/Wishlist'
import Navbar from '../Navbar/Navbar'

function Router() {
    return (
        <div>
            <Navbar/>
          <Switch>
              <Route exact path="/">
                <Homepage/>
                <Footer/>
              </Route>
              <Route exact path="/gardening">
                gardening
              </Route>
              <Route exact path="/cart">
                <Cart/>
              </Route>
              <Route exact path="/wishlist">
                <Wishlist/>
              </Route>
              <Route exact path="/user">
                <User/>
              </Route>
              <Route exact path="/plants">
              Plants
              </Route>
              <Route exact path="/seeds">
              /seeds
              </Route>
              <Route exact path="/gifts">
                Gifts
              </Route>
              <Route exact path="/offers">
                Offers
              </Route>
              <Route exact path="/books">
                Books
              </Route>
              <Route exact path="/workshop">
                Workshop
              </Route>
              <Route exact path="/bulbs">
               Bulbs
              </Route>
              <Route exact path="/pebbles">
                Pebbels
              </Route>
              <Route exact path="/assesories">
                gardening
              </Route>
              <Route exact path="/soil&fertilizer">
               Soil And Fertilizer
              </Route>

          </Switch>
            
              
        </div>
    )
}
export default Router
