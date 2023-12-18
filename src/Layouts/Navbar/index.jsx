import React, { useContext, useState } from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/WishListContext'
import { BasketContext } from '../../Context/BasketContext'

const Navbar = () => {
    const [search, setSearch] = useState('')
    const {wishlist} = useContext(WishlistContext)
    const {basket} = useContext(BasketContext)
  return (
    <nav> 
    <div className='navHeader'>
        <div className='navHeaderContainer'>
            <div className='navHeaderContainerContent'>
                <div className='navHeaderContainerContentText'>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span> ShopNow</span></p>
                </div>
                <div className='navHeaderContainerContentLanguage'>
                    <span>English </span>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
        </div>
    </div>

    <div className='navbar'>
        <div className='navbarContainer'>
            <div className='navbarName'>
                <h3>Exclusive</h3>
            </div>
            <div className='navbarItems'>
                    <ul className='navbarItemList'>
                        <Link to={'/'}><li>Home</li></Link>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>
            </div>
            <div className='navbarSearc'>
                <div className='search'>
                <input type="text" placeholder='What are you looking for?'  value={search}
          onChange={(e) => setSearch(e.target.value)}/>
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                
                <Link to={"/WishList"}><i class="fa-regular fa-heart">
                    <sup>{wishlist.length ? wishlist.length : ""}</sup>
                    </i></Link>
                <Link to={'/Basket'}><i class="fa-solid fa-cart-shopping">
                    <sup>{basket.length ? basket.length :""}</sup>
                </i></Link>

            </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar