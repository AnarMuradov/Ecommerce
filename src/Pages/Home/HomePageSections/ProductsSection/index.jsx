import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { WishlistContext } from '../../../../Context/WishListContext'
import { BasketContext } from '../../../../Context/BasketContext'
import { Link } from 'react-router-dom'
const Product = () => {
    const {addWishList} = useContext(WishlistContext)
    const {addBasket} = useContext(BasketContext)
    const [api, setApi] = useState([])
    useEffect(() => {
    fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
    .then((res)=>res.json())
    .then((data)=>setApi(data))
    }, [])
    
  return (
    <section className='ourProduct'>
        <div className='ourProductContainer'>
        <div className='ourProductHeader'>
            <div className='title'>
                <span>Our Products</span>
            </div>
            <div className='sectionName'>
                <h2>Explore Our Products</h2>
                <div className='productIcon'>
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
        <div className='ourProductCardBox'>
        {api.map((x)=>(
            <div key={x.id} className='productCard'>
          <div className='imageBg'>
          <img src={x.image} alt="" />
          <div onClick={()=>addBasket(x)} className='addToBasket'>Add To Cart</div>
          <i onClick={()=>addWishList(x)} class="fa-regular fa-heart"></i>
          <Link to={`/Detail/${x.id}`}><i class="fa-regular fa-eye"></i></Link>
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
        <div className='ourProductAllbtn'>
            <button>All</button>
        </div>
        </div>
       
    </section>
  )
}

export default Product