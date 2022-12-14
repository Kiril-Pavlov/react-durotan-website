import React from "react";
import "./OurProducts.css";
import scarf from "../assets/cart2.jpg";
import gray from "../assets/search5.jpg";
import green from "../assets/search2.jpg";
import prva from "../assets/prva.webp";
import slika3 from "../assets/search3.jpg";
import slika4 from "../assets/search4.jpg";
import slika5 from "../assets/slider-2-image.png";
import slika6 from "../assets/cart1.jpg"
import { Carousel } from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const OurProducts = () => {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = [
    // <img src={scarf} onDragStart={handleDragStart} role="presentation" className="our-products-carousel-item" />,
    <img src={gray} onDragStart={handleDragStart} role="presentation" className="our-products-carousel-item" />,
    <img src={green} onDragStart={handleDragStart} role="presentation" className="our-products-carousel-item" />,
    <img src={prva} onDragStart={handleDragStart} role="presentation" className="our-products-carousel-item" />,
    <img src={slika3} onDragStart={handleDragStart} role="presentation" className="our-products-carousel-item" />,
    <img src={slika4} onDragStart={handleDragStart} role="presentation" className="our-products-carousel-item" />,
    <img src={slika6} onDragStart={handleDragStart} role="presentation" className="our-products-carousel-item" />,
  ];



  return (
    <div className="our-products-container">
      <h2 className="our-products-title">Our Products</h2>
      <div className="our-products-links">
        <ul className="blogSearch">
          <li style={{ fontWeight: "bold" }}>BEST SELLING</li>
          <li>NEW ARRIVALS</li>
          <li>EDITOR`S PICK</li>
        </ul>
        <div className="allProducts">VIEW ALL PRODUCTS </div>
      </div>
      <div className="our-products-carousel">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoWidth={false}
          infinite
        />
      </div>
      {/* <h2 className="ourProducts-title">Our Products</h2>

      <div className="productSections">
        <ul className="blogSearch">
          <li style={{ fontWeight: "bold" }}>BEST SELLING</li>
          <li>NEW ARRIVALS</li>
          <li>EDITOR`S PICK</li>
        </ul>
        <div className="allProducts">VIEW ALL PRODUCTS </div>
      </div>
      <Carousel className="carousel">
        <Carousel.Item className="carousel">
          <img src={green} alt="First slide" className='image-carousel' />
          <img src={prva} alt="Second slide" className='image-carousel' />
          <img src={scarf} alt="Third slide" className='image-carousel' />
          <img src={gray} alt="Third slide" className='image-carousel' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slika5} alt="First slide" className='image-carousel' />
          <img src={prva} alt="Second slide" className='image-carousel' />
          <img src={gray} alt="Third slide"  className='image-carousel'/>
          <img src={slika4} alt="Third slide"  className='image-carousel'/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={green} alt="First slide" className='image-carousel' />
          <img src={slika3} alt="Second slide" className='image-carousel' />
          <img src={gray} alt="Third slide"  className='image-carousel'/>
          <img src={slika6} alt="Third slide"  className='image-carousel'/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={prva} alt="First slide" className='image-carousel' />
          <img src={slika3} alt="Second slide" className='image-carousel' />
          <img src={slika4} alt="Third slide"  className='image-carousel'/>
          <img src={slika6} alt="Third slide"  className='image-carousel'/>
        </Carousel.Item>
      </Carousel> */}

    </div>
  );
};

export default OurProducts;

