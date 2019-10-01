import React from 'react';
import './App.css';
import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header';
import RestaurantList from '../src/Components/RestaurantList';

function App() {
  return (
    <div className="App">
      <Header title="Avalio" />
      <RestaurantList />
      <Footer />
    </div>
  );
}

export default App;
