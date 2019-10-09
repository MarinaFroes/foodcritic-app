import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import Footer from '../src/Components/Footer';
import Home from './Components/Home';
import Header from '../src/Components/Header';
import RestaurantList from '../src/Components/RestaurantList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title="FoodCritic" />
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurant_list" component={RestaurantList } />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
