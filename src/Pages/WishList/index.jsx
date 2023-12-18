import React, { useContext } from 'react'
import "./style.scss"
import { WishlistContext } from '../../Context/WishListContext'
const WishList = () => {
    const {wishlist,removewish} = useContext(WishlistContext)
  return (
    <section className='wishList'>
        <div className='wishListContainer'>
            <div className='wishListName'>
                <h2>WishList</h2>
                <button>Move All To Bag</button>
            </div>
            <div className='wishListProduct'>
            {wishlist.map((x)=>(
            <div key={x.id} className='productCard'>
          <div className='imageBg'>
          <img src={x.image} alt="" />
          <div className='addToBasket'>Add To Cart</div>
          <i onClick={()=>removewish(x)} class="fa-solid fa-trash"></i>
          
          </div>
            <div className='productInfo'>
                <h4>{x.name}</h4>
                <div className='price'>
                    <span>${x.price}</span>
                </div>
            </div>
            </div>

        ))}
            </div>
        </div>

    </section>
  )
}

export default WishList