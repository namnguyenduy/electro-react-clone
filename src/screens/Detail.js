import React from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  Input,
  Label,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CountdownTimer from "react-component-countdown-timer";
// import icon
import { BiGitCompare } from "react-icons/bi";
import { RiHeartLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaCartArrowDown } from "react-icons/fa";
// import my component
import Header from "../components/header/Header";
import Partner from "../components/partner/Partner";
import Footer from "../components/footer/Footer";
import "../Detail.scss";
export default function Detail() {
  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      <div className="detailMainContent">
        {/* breadcrumb */}
        <div className="breadcrumbWrapper">
          <Container>
            <Breadcrumb className="breadcrumbHolder">
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Detail</BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        {/* detail */}
        <div className="detailWrapper">
          <Container>
            <Row>
              {/* detail image */}
              <Col lg="5">
                <div className="detailImage">
                  <div className="detailImageInner">
                    <div
                      className="sliderMainImage"
                      style={{ background: "tomato" }}
                    ></div>
                  </div>
                </div>
              </Col>
              {/*  */}
              <Col lg="4">
                <div className="productVendor">
                  <Link to={"/"} title="Armani">
                    Armani
                  </Link>
                </div>
                <h2 className="detailName">Black Fashion Zapda</h2>
                {/* rating */}
                <div className="ratingLink">
                  <div className="ratingInner">
                    <div className="looxRating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <span>(2)</span>
                    </div>
                    <a href="tabReview" title="Reviews">
                      Add Your Review
                    </a>
                  </div>
                </div>
                {/* social sharing */}
                <div className="socialSharing">
                  <ul className="socialList">
                    <li>
                      <a
                        href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Felectro-theme-2019.myshopify.com%2Fproducts%2Fblack-fashion-zapda-shoes"
                        target="_blank"
                        rel="noopener"
                        title="Facebook"
                      >
                        <FaFacebookF />
                        <span>Share</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//twitter.com/share?url=https://electro-theme-2019.myshopify.com/products/black-fashion-zapda-shoes&amp;text=black-fashion-zapda-shoes"
                        target="_blank"
                        rel="noopener"
                        title="Tweet"
                      >
                        <FaTwitter />
                        <span>Share</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* short description */}
                <div className="shortDescription">
                  <ul>
                    <li>Accept SIM card and call</li>
                    <li>Take photos</li>
                    <li>Make calling instead of mobile phone</li>
                    <li>Sync music play and sync control music</li>
                    <li>Sync Facebook,Twiter,emailand calendar</li>
                  </ul>
                </div>
                {/* product sku collection */}
                <ul className="productSkuCollection">
                  <li className="productCode">
                    <span>Product Code:</span>
                    <span id="sku">5487FB8/41</span>
                  </li>
                  <li className="category">
                    <span>Category:</span>
                    <Link to={"/"}>Laptops & Computer,</Link>
                    <Link to={"/"}>Mouse,</Link>
                    <Link to={"/"}>Printers & Ink</Link>
                  </li>
                </ul>
                {/* people in cart */}
                <div className="peopleInCart">
                  <div className="imgCart">
                    <img src={require("../assets/images/inCart.webp")} alt="" />
                  </div>
                  <div className="peopleText">
                    <strong>Other people want this. </strong>3 people have this
                    in their carts right now.
                  </div>
                </div>
                {/*  */}
                <div className="shippingTime">
                  <div className="deliveryTime">
                    Want it delivered by
                    <strong>Thursday, 2 June</strong>
                  </div>
                  <div className="deadline">
                    <span>Order within</span>
                    <CountdownTimer count={68321} hideDay showTitle noPoints />
                  </div>
                </div>
              </Col>
              {/* product info */}
              <Col lg="3">
                <div className="productInfo">
                  <div className="productInfoInner">
                    {/* stock */}
                    <div id="stock">
                      <span>Available:</span>
                      <span className="stock"> In Stock</span>
                    </div>
                  </div>
                  {/* price */}
                  <div className="productPrice">
                    <span className="priceCompare">$64400</span>
                    <span className="priceSale">$45100</span>
                  </div>
                  <Form className="productForm">
                    <div className="quantityProduct">
                      {/* quantity */}
                      <label>Quantity</label>
                      <div className="quantity">
                        <Input
                          type="number"
                          className="quantityItem"
                          value={1}
                        />
                        <div className="quantityWrapper">
                          <span className="qtyUp" title="Increase">
                            +
                          </span>
                          <span className="qtyDown" title="Decrease">
                            -
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="productAction">
                      {/* size */}
                      <div className="productSize">
                        <label>Size</label>
                        <div className="sizeItem">
                          <input
                            type="radio"
                            id="M"
                            name="size"
                            value={"M"}
                            checked
                          />
                          <label for="M">M</label>
                        </div>
                        <div className="sizeItem">
                          <input type="radio" id="L" name="size" value={"L"} />
                          <label for="L">L</label>
                        </div>
                        <div className="sizeItem">
                          <input
                            type="radio"
                            id="XL"
                            name="size"
                            value={"XL"}
                          />
                          <label for="XL">XL</label>
                        </div>
                      </div>
                    </div>
                    <div className="actionButton">
                      <Button
                        className={clsx(
                          "btnSample",
                          "addToCart",
                          "btnSampleLarge"
                        )}
                      >
                        <FaCartArrowDown />
                        Add to cart
                      </Button>
                    </div>
                    <div className="addToWishlist">
                      <RiHeartLine />
                      <span>Wishlist</span>
                    </div>
                    <div className="addToCompare">
                      <BiGitCompare />
                      <span>Compare</span>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* partner */}
      <div>
        <Partner />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
