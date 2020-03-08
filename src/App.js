import React from 'react'
import { HashRouter as Router , Route } from 'react-router-dom'
import './App.css'
// import Footer from '../src/Components/Footer'
import Login from './Components/Login'
import Home from './Components/Home'
import Header from '../src/Components/Header'
import RestaurantList from '../src/Components/RestaurantList'
import AddRestaurant from '../src/Components/AddRestaurant'
import RestaurantPage from '../src/Components/RestaurantPage'

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header title="FoodCritic" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurant_list" component={RestaurantList} />
        <Route exact path="/add_restaurant" component={AddRestaurant} />
        <Route path="/restaurant/:rid" component={RestaurantPage} />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
