import React from 'react'
import Header from './HomePageSections/HeaderSection'
import Product from './HomePageSections/ProductsSection'
import FlashSales from './HomePageSections/FlashSalesSection'
import BrowseByCateg from './HomePageSections/BrowseByCategSection'
import BestSelling from './HomePageSections/BestSelling'

const Home = () => {
  return (
    <main id='Home'>
    <Header/>
    <FlashSales/>
    <BrowseByCateg/>
    <BestSelling/>
    <Product/>
    </main>
  )
}

export default Home