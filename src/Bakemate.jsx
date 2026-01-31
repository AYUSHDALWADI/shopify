import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartArrowDown,
  faTruckFast,
  faHeart,
  faSchool
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons/faCommentDollar";
import { faPercent } from "@fortawesome/free-solid-svg-icons/faPercent";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

import { useNavigate } from "react-router-dom";
import "./Bakemate.css";
import Login from "./login";
import { useContext } from "react";
import { CartContext } from "./CartContext";


import Blueberrypancake from "./assets/bluebarrypancak.png";
import Whitebread from "./assets/whitebread.jpg";
import mangocake from "./assets/mangocake.jpg";
import rasberry from "./assets/rassberrycake.jpg";
import caramelcake from "./assets/caramelchocolatecake.jpg";
import biscoff from "./assets/bisscofe.jpg";
import chocolatebrownie from "./assets/chocolatebrownie.jpg";
import cakelogo from "./assets/cakelogo2.png";
import banner from "./assets/bannermain.jpg";
import brownbread from "./assets/Brownbread1.png";



const products = [
  {
    id: 1,
    name: "Blueberry Pancakes",
    brand: "Waffles And Pancakes",
    description: "Festive blueberry house for holiday celebrations.",
    price: 99.99,
    image: Blueberrypancake,
  },
  {
    id: 2,
    name: "White Bread",
    brand: "Croissants",
    description: "Flaky croissant soft bread.",
    price: 49.99,
    image: Whitebread,
  },
  {
    id: 3,
    name: "Mango Cheesecake",
    brand: "Waffles And Pancakes",
    description: "Soft mango cheese cake with cream cheese frosting.",
    price: 349.49,
    image: mangocake,
  },
  {
    id: 4,
    name: "Lotus Biscoff Cake",
    brand: "Waffles And Pancakes",
    description: "Moist cake piece packed with lotus biscoff flavour.",
    price: 399.99,
    image: biscoff,
  },
  {
    id: 5,
    name: "Caramel Chocolate Cake",
    brand: "Waffles And Pancakes",
    description: "Soft doughnuts with a classic caramel glaze.",
    price: 499.99,
    image: caramelcake,
  },
  {
    id: 6,
    name: "Chocolate Brownie",
    brand: "Croissants",
    description: "Fluffy brownie with rich chocolate filling.",
    price: 99.99,
    image: chocolatebrownie,
  },
  {
    id: 7,
    name: "Raspberry Rose Cake",
    brand: "Waffles And Pancakes",
    description: "Tangy and sweet raspberry tart with buttery crust.",
    price: 249.99,
    image: rasberry,
  },
  {
    id: 8,
    name: "Brown Bread",
    brand: "By Croissants",
    description: "Toasted garlic bread with herbs and butter.",
    price: 79.99,
    image: brownbread,
  },

];

function Bakemate() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
const { cartItems } = useContext(CartContext);
const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("loggedIn") === "true"
);
const handleLogout = () => {
  localStorage.removeItem("loggedIn");
  setIsLoggedIn(false);
  alert("Logged out successfully");
};

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold" href="#">
            Bakemate
          </a>

          <form
            className="d-flex mx-auto"
            style={{
              width: "30%",
              border: "3px solid rgba(0, 204, 255, 0.91)",
              borderRadius: "8px",
            }}
          >
            <input className="form-control" placeholder="Search products" />
            <button className="btn btn-outline-success">Search</button>
          </form>

          <div className="d-flex">
            {!isLoggedIn ? (
  <button className="btnmain" onClick={() => setShowLogin(true)}>
    <FontAwesomeIcon icon={faUser} />
  </button>
) : (
  <button className="btnmain" onClick={handleLogout}>
    Logout
  </button>
)}

            <button className="btnmain" onClick={() => navigate("/cartdetails")}>
  <FontAwesomeIcon icon={faCartArrowDown} />
  <span className="cart-count">{cartItems.length}</span>
</button>

          </div>
        </div>
      </nav>

      <div style={{ marginTop: "90px" }} />


      <section className="hero">
        <div className="hero-text">
          <p className="price">Starting At 99rs</p>
          <h1>The best cake <br />
            collection 2026</h1>
          <p className="offer">
            Exclusive offer <span>-20%</span>
          </p>
          <button className="hero-btn">Grab the opportunity Now</button>
        </div>
        <div className="hero-image">
          <img src={cakelogo} alt="logo" />
        </div>
      </section>


      <div className="container boxes">
        <div className="box1" >
          <div className="tr1">
            <h1>
              <FontAwesomeIcon icon={faTruckFast} size="1x" className="truck" />
            </h1>
          </div>
          <div className="tr2">
            <h5>Free Delivery</h5>
            <span className="spn1">Orders from all items</span>
          </div>
        </div>
        <div className="box2" >
          <div className="tr1">
            <h1>
              <FontAwesomeIcon icon={faCommentDollar} size="1x" className="truck" />
            </h1>
          </div>
          <div className="tr2">
            <h5>Return & Refund</h5>
            <span className="spn1">Money back guarantee</span>
          </div>
        </div>
        <div className="box3" >
          <div className="tr1">
            <h1>
              <FontAwesomeIcon icon={faPercent} size="1x" className="truck" />
            </h1>
          </div>
          <div className="tr2">
            <h5>Member Discount</h5>
            <span className="spn1">On order over 199rs</span>
          </div>
        </div>
        <div className="box4" >
          <div className="tr1">
            <h1>
              <FontAwesomeIcon icon={faPhone} size="1x" className="truck" />
            </h1>
          </div>
          <div className="tr2">
            <h5>Support 24/7</h5>
            <span className="spn1">Contact us 24 hours a day</span>
          </div>
        </div>
      </div>


      <h1 className="ad1">Trending Products</h1>
      <div className="featured-container">
        <div className="products-grid">
          {products.slice(4, 8).map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-box">
                <img src={product.image} alt={product.name} />
                <span className="heart">♥</span>
              </div>
              <div className="card-body">
                <h3 className="prdname"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate("/productDetail", { state: product })
                  }
                >
                  {product.name}
                </h3>
                <small>By {product.brand}</small>
                <p>{product.description}</p>
                <div className="price">₹{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-container">
        <div className="products-grid">
          {products.slice(0, 4).map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-box">
                <img src={product.image} alt={product.name} />
                <span className="heart">♥</span>
              </div>
              <div className="card-body">
                <h3 className="prdname"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate("/productDetail", { state: product })
                  }
                >
                  {product.name}
                </h3>
                <small>By {product.brand}</small>
                <p>{product.description}</p>
                <div className="price">₹{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container ad2">
        <div className="firstimage">
          <img src={banner} alt="" />
        </div>
        <div className="firsttext">
          <h3>Don't miss the offer!</h3>
          <h3>Grab it now</h3>
          <button className="btn3">Shop Now</button>
        </div>

      </div>
      <h1 className="ad1">Deals Of The Day</h1>
      <div className="featured-container">
        <div className="products-grid">
          {products.slice(3, 7).map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-box">
                <img src={product.image} alt={product.name} />
                <span className="heart">♥</span>
              </div>
              <div className="card-body">
                <h3 className="prdname"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate("/productDetail", { state: product })
                  }
                >
                  {product.name}
                </h3>
                <small>By {product.brand}</small>
                <p>{product.description}</p>
                <div className="price">₹{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="ad1">Featured Product</h1>
      <div className="featured-container">
        <div className="products-grid">
          {products.slice(0, 3).map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-box">
                <img src={product.image} alt={product.name} />
                <span className="heart">♥</span>
              </div>
              <div className="card-body">
                <h3 className="prdname"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate("/productDetail", { state: product })
                  }
                >
                  {product.name}
                </h3>
                <small>By {product.brand}</small>
                <p>{product.description}</p>
                <div className="price">₹{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <p>Contact Us</p>
            <p>Returns & Refunds</p>
            <p>Terms & Conditions</p>
            <p>FAQ</p>
          </div>

          <div className="divider"></div>

          <div className="footer-col">
            <h4>USEFULL LINKS</h4>
            <p>Account Details</p>
            <p>Orders</p>
          </div>
          <div className="divider"></div>

          <div className="footer-col">
            <h4>NEWSLETTER</h4>
            <p className="newsletter-text">SIGN UP FOR OUR NEWSLETTER</p>
            <div className="newsletter">
              <input type="email" placeholder="Please Enter Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BAKEMATE | All Rights Reserved.</p>

          <div className="socials">
            <span className="icon fb"><FontAwesomeIcon icon={faHeart} size="1x" className="" /></span>
            <span className="icon ig"><FontAwesomeIcon icon={faSchool} size="1x" className="" /></span>
            <span className="icon pin"><FontAwesomeIcon icon={faHeart} size="1x" className="" /></span>
            <span className="icon tw"><FontAwesomeIcon icon={faHeart} size="1x" className="" /></span>
          </div>
        </div>
      </footer>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Bakemate;
