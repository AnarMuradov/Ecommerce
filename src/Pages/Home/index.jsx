import React from 'react'
import Header from './HomePageSections/HeaderSection'
import Product from './HomePageSections/ProductsSection'
import FlashSales from './HomePageSections/FlashSalesSection'
import BrowseByCateg from './HomePageSections/BrowseByCategSection'

const Home = () => {
  return (
    <main id='Home'>
    <Header/>
    <FlashSales/>
    <BrowseByCateg/>
    <Product/>
    </main>
  )
}

export default Home