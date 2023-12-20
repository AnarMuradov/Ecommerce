import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import Timer from '../../../../Components/FlashSalesTimer'
import { BasketContext } from '../../../../Context/BasketContext'
import { WishlistContext } from '../../../../Context/WishListContext'
import { Link } from 'react-router-dom'
const FlashSales = () => {
    const {addWishList} = useContext(WishlistContext)
    const {addBasket} = useContext(BasketContext)
    const [api, setApi] = useState([])
    const [visibleData, setVisibleData] = useState([]);
    const dataLimit = 8;
    useEffect(() => {
    fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
    .then((res)=>res.json())
    .then((data)=>{setApi(data)
        setVisibleData(api.slice(4, dataLimit))
    }
    )

    }, [api ])
    
  return (
    <section className='flashSales'>
    <div className='flashSales__Container'>
        <div className='flashSales__Head'>
        <div className='flashSales__Head__Title'>Today's</div>  
        <div className='flashSales__Head__Content'>
        <div className='flashSales__Head__Content__Name'>
        <h2>Flash Sales</h2>
        <Timer skidka={"Dec 25, 2023 15:37:25"}/>
        </div>   
        <div className='flashSales__Head__Content__Icon'>
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>
            </div> 
        </div>  
        </div>
        <div className='flashSales__Products'>
        {visibleData.map((x)=>(
            <div key={x.id} className='productCard'>
          <div className='imageBg'>
          <img src={x.image} alt="" />
          <div onClick={()=>addBasket(x)} className='addToBasket'>Add To Cart</div>
          <i onClick={()=>addWishList(x)} class="fa-regular fa-heart"></i>
          <Link to={"/Detail"}><i class="fa-regular fa-eye"></i></Link>
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
        <div className='flashSales__btn'>
            <button>View All Products</button>
        </div>
    </div>

</section>
  )
}

export default FlashSales