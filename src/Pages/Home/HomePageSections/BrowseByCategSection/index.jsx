import React from 'react'
import './style.scss'
import BrowseCard from '../../../../Components/BrowseCard'
const BrowseByCateg = () => {
  return (
    <div className='browse'>
        <div className='browseContainer'>
        <div className='browseContainer__head'>
            <div className='browseContainer__head__title'>
                <span>Categories</span>
            </div>
            <div className='browseContainer__head__name'>
                <h2>Browse By Categories</h2>
                <div className='browseContainer__head__name__icon'>
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
        <div className='browseContainer__box'>
            <BrowseCard/>
        </div>
        </div>
    </div>
  )
}

export default BrowseByCateg