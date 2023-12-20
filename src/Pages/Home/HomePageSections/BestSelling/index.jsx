import React from "react";
import  { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BasketContext } from "../../../../Context/BasketContext";
import { WishlistContext } from "../../../../Context/WishListContext";
import { Link } from "react-router-dom";
const BestSelling = () => {
  const { addWishList } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  const [api, setApi] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const dataLimit = 4;
  useEffect(() => {
    fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
        setVisibleData(api.slice(0, dataLimit));
      });
  }, [api]);
  return (
    <section className="BestSelling">
      <div className="BestSelling__Container">
        <div className="BestSelling__Head">
          <div className="BestSelling__Head__Title">This Month</div>
          <div className="BestSelling__Head__Content">
            <div className="BestSelling__Head__Content__Name">
              <h2>Best Selling Products</h2>
            </div>
            <div className="BestSelling__Head__Content__Icon">
              <i class="fa-solid fa-arrow-left"></i>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="BestSelling__Products">
          {visibleData.map((x) => (
            <div key={x.id} className="productCard">
              <div className="imageBg">
                <img src={x.image} alt="" />
                <div onClick={() => addBasket(x)} className="addToBasket">
                  Add To Cart
                </div>
                <i
                  onClick={() => addWishList(x)}
                  class="fa-regular fa-heart"
                ></i>
          <Link to={"/Detail"}><i class="fa-regular fa-eye"></i></Link>
              </div>
              <div className="productInfo">
                <h4>{x.name}</h4>
                <div className="price">
                  <span>${x.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
