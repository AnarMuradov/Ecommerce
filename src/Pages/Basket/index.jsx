import React, { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext";
import './style.scss'
const Basket = () => {
  const { basket,increase,decrease } = useContext(BasketContext);
  return (
    <section className="basket">
      <div className="basketContainer">
        <table>
          <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Quanty</th>
            <th>Subtotal</th>
          </thead>
          {basket.map((x) => (
            <tbody>
              <td>
                <div key={x.id}  className="productName">
                    <img src={x.image} alt="" /> {x.name}
                </div>
              </td>
              <td>
                ${x.price}
              </td>
              <td>
                <button onClick={()=>decrease(x)}>-</button>
                {x.count}
                <button onClick={()=>increase(x)}>+</button></td>
              <td>{x.count*x.price}</td>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default Basket;
