
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartArrowDown, faMoon, faTruck, faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import './shopify.css';
import laptop from "./assets/hero.webp"
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons/faCommentDollar";
import { faPercent } from "@fortawesome/free-solid-svg-icons/faPercent";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import nailpaint from "./assets/thumbnail.png";
import ck from "./assets/ck1.webp";
import coco from "./assets/coco.webp";
import perfume from "./assets/perfume.webp";
import banner1 from "./assets/banner.png";
import dolce from "./assets/dolce.webp";
import gucci from "./assets/gucci.webp";
import bed1 from "./assets/bed1.webp";
import bed2 from "./assets/bed2.webp";
import table from "./assets/table1.webp";
import chair from "./assets/chair.webp";
import mirror from "./assets/mirror.webp";
import apple from "./assets/apple.webp";

function Shopify() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid px-4">


          <a className="navbar-brand fw-bold" href="#">
            Shopify
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex mx-auto my-2 my-lg-0" style={{ width: "30%", border: "3px solid rgba(0, 204, 255, 0.91)", borderRadius: "8px" }}>

              <input
                className="form-control"
                type="search"
                placeholder="Search products"
              />
              <button className="btn btn-outline-success" style={{ backgroundColor: "rgba(0, 204, 255, 0.91)", color: "white", border: "3px solid rgba(0, 204, 255, 0.91)" }}>
                Search
              </button>

            </form>


            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </ul>

          </div>
        </div>
        <div>
          <h1><FontAwesomeIcon icon={faUser} size="1x" className="profile" /></h1>
        </div>
        <div>
          <FontAwesomeIcon icon={faCartArrowDown} size="1x" className="cartdownload" />
        </div>
        <div>
          <FontAwesomeIcon icon={faMoon} size="1x" className="moonicon" />
        </div>
      </nav>

      <div style={{ marginTop: "80px" }}></div>

      <section className="hero g-5">



        <div className="hero-text">
          <p className="price">Starting At 999$ </p>
          <h1>
            The best notebook <br /> collection 2025
          </h1>
          <p className="offer">
            Exclusive offer <span>-50%</span> off this week
          </p>
          <button className="hero-btn">Grab the opportunity Now</button>
        </div>


        <div className="hero-image">
          <img
            src={laptop}
            alt="Laptop"
          />
        </div>


      </section>


      <div className="container boxes">
        <div className="box1" >
          <div className="tr1">
            <h1>
              <FontAwesomeIcon icon={faTruck} size="1x" className="truck" />
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
            <span className="spn1">On order over $99</span>
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
      <div className="container">

        <div className="product-grid">

          {/* Card 1 */}
          <div className="product-card">
            <div className="img-box">
              <img
                src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
                alt=""
              />
            </div>
            <div className="card-body">
              <span className="category">beauty</span>
              <h3>Essence Mascara Lash Princess</h3>
              <div className="rating">⭐⭐⭐⭐ <span>4.56</span></div>
              <div className="price">
                <span className="new">$8.94</span> <br />
                <span className="old">$9.99</span>
                <span className="off">-10.48%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="product-card">
            <div className="img-box">
              <img src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp" alt="" />
            </div>
            <div className="card-body">
              <span className="category">beauty</span>
              <h3>Eyeshadow Palette with Mirror</h3>
              <div className="rating">⭐⭐⭐⭐ <span>4.86</span></div>
              <div className="price">
                <span className="new">$16.35</span> <br />
                <span className="old">$19.99</span>
                <span className="off">-18.19%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="product-card">
            <div className="img-box">
              <img src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp" alt="" />
            </div>
            <div className="card-body">
              <span className="category">beauty</span>
              <h3>Powder Canister</h3>
              <div className="rating">⭐⭐⭐⭐⭐ <span>5</span></div>
              <div className="price">
                <span className="new">$13.51</span> <br />
                <span className="old">$14.99</span>
                <span className="off">-9.84%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="product-card">
            <div className="img-box">
              <img src="https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp" alt="" />
            </div>
            <div className="card-body">
              <span className="category">beauty</span>
              <h3>Red Lipstick</h3>
              <div className="rating">⭐⭐⭐⭐⭐ <span>5</span></div>
              <div className="price">
                <span className="new">$11.41</span> <br />
                <span className="old">$12.99</span>
                <span className="off">-12.16%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

        </div>
      </div>

      <div className="container">

        <div className="product-grid">

          {/* Card 2-1 */}
          <div className="product-card">
            <div className="img-box">
              <img
                src={nailpaint}
                alt=""
              />
            </div>
            <div className="card-body">
              <span className="category">beauty</span>
              <h3>Red Nail Polish</h3>
              <div className="rating">⭐⭐⭐⭐ <span>4</span></div>
              <div className="price">
                <span className="new">$7.96</span> <br />
                <span className="old">$8.99</span>
                <span className="off">-11.44%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 2-2 */}
          <div className="product-card">
            <div className="img-box">
              <img src={ck} alt="" />
            </div>
            <div className="card-body">
              <span className="category">fragrances</span>
              <h3>Calvin Klein CK One</h3>
              <div className="rating">⭐⭐⭐⭐ <span>4.37</span></div>
              <div className="price">
                <span className="new">$49.05</span> <br />
                <span className="old">$49.99</span>
                <span className="off">-18.19%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 2-3 */}
          <div className="product-card">
            <div className="img-box">
              <img src={coco} alt="" />
            </div>
            <div className="card-body">
              <span className="category">fragrances</span>
              <h3>Channel coco noir Eau De</h3>
              <div className="rating">⭐⭐⭐⭐⭐ <span>4.26</span></div>
              <div className="price">
                <span className="new">$108.53</span> <br />
                <span className="old">$129.99</span>
                <span className="off">-16.51%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 2-4 */}
          <div className="product-card">
            <div className="img-box">
              <img src={perfume} alt="" />
            </div>
            <div className="card-body">
              <span className="category">fragrances</span>
              <h3>Dior j'adore</h3>
              <div className="rating">⭐⭐⭐ <span>3</span></div>
              <div className="price">
                <span className="new">$76.74</span> <br />
                <span className="old">$89.99</span>
                <span className="off">-14.72%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

        </div>
      </div>

      <div className="container ad2">
        <div className="firstimage">
          <img src={banner1} alt="" />
        </div>
        <div className="firsttext">
          <h3>Don't miss the offer!</h3>
          <h3>Grab it now</h3>
          <button className="btn3">Shop Now</button>
        </div>

      </div>
      <h1 className="ad1">New Arrivals</h1>
      <div className="container">

        <div className="product-grid">

          {/* Card 3-1 */}
          <div className="product-card">
            <div className="img-box">
              <img
                src={dolce}
                alt=""
              />
            </div>
            <div className="card-body">
              <span className="category">fragrances</span>
              <h3>Dolce Shine Eau de</h3>
              <div className="rating">⭐⭐⭐⭐ <span>3.96</span></div>
              <div className="price">
                <span className="new">$69.99</span> <br /> <br />

              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 3-2 */}
          <div className="product-card">
            <div className="img-box">
              <img src={gucci} alt="" />
            </div>
            <div className="card-body">
              <span className="category">fragrances</span>
              <h3>Gucci Bloom Eau de</h3>
              <div className="rating">⭐⭐ <span>2</span></div>
              <div className="price">
                <span className="new">$68.48</span> <br />
                <span className="old">$79.99</span>
                <span className="off">-14.39%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 3-3 */}
          <div className="product-card">
            <div className="img-box">
              <img src={bed1} alt="" />
            </div>
            <div className="card-body">
              <span className="category">furniture</span>
              <h3>Annibale Colombo Bed</h3>
              <div className="rating">⭐⭐⭐⭐⭐ <span>4.77</span></div>
              <div className="price">
                <span className="new">$1737.16</span> <br />
                <span className="old">$1899.99</span>
                <span className="off">-8.57%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 3-4 */}
          <div className="product-card">
            <div className="img-box">
              <img src={bed2} alt="" />
            </div>
            <div className="card-body">
              <span className="category">furniture</span>
              <h3>Annibale Colombo Sofa</h3>
              <div className="rating">⭐⭐⭐⭐ <span>3.92</span></div>
              <div className="price">
                <span className="new">$2139.99</span> <br />
                <span className="old">$2499.99</span>
                <span className="off">-14.4%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

        </div>
      </div>

      <div className="container">

        <div className="product-grid">

          {/* Card 4-1 */}
          <div className="product-card">
            <div className="img-box">
              <img
                src={table}
                alt=""
              />
            </div>
            <div className="card-body">
              <span className="category">furniture</span>
              <h3>Bedside Table African Cherry</h3>
              <div className="rating">⭐⭐⭐ <span>2.87</span></div>
              <div className="price">
                <span className="new">$242.72</span> <br />
                <span className="old">$299.99</span>
                <span className="off">-19.09%</span> <br /> <br />
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 4-2 */}
          <div className="product-card">
            <div className="img-box">
              <img src={chair} alt="" />
            </div>
            <div className="card-body">
              <span className="category">furniture</span>
              <h3>Knoll Saarinen Executive Conference Chair</h3>
              <div className="rating">⭐⭐⭐⭐⭐ <span>4.88</span></div>
              <div className="price">
                <span className="new">$489.94</span> <br />
                <span className="old">$499.99</span>
                <span className="off">-2.01%</span>
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 4-3 */}
          <div className="product-card">
            <div className="img-box">
              <img src={mirror} alt="" />
            </div>
            <div className="card-body">
              <span className="category">furniture</span>
              <h3>Wooden Bathroom Sink With Mirror</h3>
              <div className="rating">⭐⭐⭐⭐⭐ <span>3.59</span></div>
              <div className="price">
                <span className="new">$729.59</span> <br />
                <span className="old">$799.99 </span>
                <span className="off">-8.8%</span> <br /> <br />
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

          {/* Card 4-4 */}
          <div className="product-card">
            <div className="img-box">
              <img src={apple} alt="" />
            </div>
            <div className="card-body">
              <span className="category">groceries</span>
              <h3>Apple</h3>
              <div className="rating">⭐⭐⭐⭐ <span>4</span></div>
              <div className="price">
                <span className="new">$1.74</span> <br />
                <span className="old">$1.99</span>
                <span className="off">-12.62%</span> <br /> <br />
              </div>
              <button className="cart"><FontAwesomeIcon icon={faCartFlatbed} size="1x" /></button>
            </div>
          </div>

        </div>
      </div>
      <div className="ft1">
        <p>© Copyright | All Rights Reserved</p>
        <a className="ft2">Ayush Dalwadi</a>
      </div>
    </>
  )
}

export default Shopify;