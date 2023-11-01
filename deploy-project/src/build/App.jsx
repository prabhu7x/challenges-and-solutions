import React from 'react'
import Header from './features/layout/Header'
import Cart from './features/layout/Cart'
import ProductCard from './features/layout/ProductCard'
import Footer from './features/layout/Footer'

function App() {
  return (
    <>
    <div className="overlay"></div>
    <Header />
    <hr />
    <Cart />
    <ProductCard />
    <Footer />
    </>
  )
}

export default App