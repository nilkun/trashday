import React, { Component } from 'react';
import Trash from './components/Trash'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Trash />
        <Footer />
      </div>
    );
  }
}

export default App;
