import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* <Body /> */}
       <ProductPage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
