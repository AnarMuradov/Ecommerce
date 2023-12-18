import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import './style.scss'
const Header = () => {
    const data = [
        {
          image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
        },
        {
          image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/iphone-15-pro-leaks-090714-16x9.png?VersionId=t2lV_b1pvm1C1ziH8acRN8emGgaCXqNY",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDRk6ocbakWYuV7UeJ7bkLUKnpU9A2ozXag&usqp=CAU",
        }
      ];

  return (
    <section className='HomeHeader'>
        <div className='HomeHeaderContainer'>
        <div className='HeaderMenu'>
            <ul className='HeaderMenuList'>
                <li>Woman's Fashion</li>
                <li>Men's Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
        <div className='HeaderSlider'>
        <div className="App">
      <div style={{ textAlign: "center" }}>
       
        <div style={{
          padding: "20px 20px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="850px"
            height="370px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
          />
        </div>
      </div>
    </div>
        </div>
        </div> 

    </section>
  )
}

export default Header