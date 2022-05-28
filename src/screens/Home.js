import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Container,
  Row,
  Col,
  Progress,
  Button,
} from "reactstrap";
import CountdownTimer from "react-component-countdown-timer";
// import icon
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiHeartLine } from "react-icons/ri";
// import my component
import Header from "../components/header/Header";
import Partner from "../components/partner/Partner";
import Footer from "../components/footer/Footer";
import "../Home.scss";
import { homeCategories, CarouselInfo } from "../fakeData";

export default function Home() {
  // State for Active index
  const [activeIndex, setActiveIndex] = useState(0);

  // State for Animation
  const [animating, setAnimating] = useState(false);

  // Sample it
  // Items array length
  const itemLength = CarouselInfo.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = CarouselInfo.map((e) => {
    return (
      <CarouselItem
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <Container>
          <Row className="sliderContent">
            <div className="imageLayerBox">
              <img src={e.img} alt="" className="sliderImg" />
            </div>
            <div className="contentBox">
              <div className="contentBoxHeading">
                <h2>{e.heading}</h2>
              </div>
              <div className="contentBoxSubHeading">{e.subHeading}</div>
              <Button className={clsx("btnSample", "btnSampleLarge")}>
                {e.button}
              </Button>
            </div>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      {/*  carouse */}
      <div
        className="mainContent"
        // style={{ background: "tomato", height: "100vh" }}
      >
        <div className="homeMainContent">
          {/* home slideshow */}
          <div className="homeSlideShow">
            <Container fluid>
              <Carousel
                previous={previousButton}
                next={nextButton}
                activeIndex={activeIndex}
                className="slideShowWrapper"
              >
                <CarouselIndicators
                  items={CarouselInfo}
                  activeIndex={activeIndex}
                  onClickHandler={(newIndex) => {
                    if (animating) return;
                    setActiveIndex(newIndex);
                  }}
                />
                {carouselItemData}
                <CarouselControl
                  directionText="Prev"
                  direction="prev"
                  onClickHandler={previousButton}
                />
                <CarouselControl
                  directionText="Next"
                  direction="next"
                  onClickHandler={nextButton}
                />
              </Carousel>
            </Container>
          </div>
          {/* section separator */}
          <div className="sectionSeparator"></div>
        </div>
        {/* home banner */}
        <div className="homeBanner">
          <Container>
            <Row>
              {/* item 1 */}
              <Col lg="3">
                <div className="bannerItem">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/images/homeBanner/banner1.webp")}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
              {/* item 2 */}
              <Col lg="3">
                <div className="bannerItem">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/images/homeBanner/banner2.webp")}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
              {/* item 3 */}
              <Col lg="3">
                <div className="bannerItem">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/images/homeBanner/banner3.webp")}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
              {/* item 4 */}
              <Col lg="3">
                <div className="bannerItem">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/images/homeBanner/banner4.webp")}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* tab panel */}
        <div className="tabPanel">
          <Container>
            <div className="tabContentWrapper">
              {/* tab content */}
              <Row className="tabContent">
                {/* tab special product */}
                <Col lg="5" className="tabsSpecialProduct">
                  <div className="productWrapper">
                    {/* product head */}
                    <div className="productHead">
                      <span className="specialOfferText">
                        Special
                        <br /> Offer
                      </span>
                      <Link to={"/"}>
                        <img
                          src={require("../assets/images/specialProduct.webp")}
                          alt=""
                        />
                      </Link>
                      <span className="specialProductLabel">
                        <span class="text">Save</span>
                        <span class="percent">30%</span>
                      </span>
                    </div>
                    {/* product content */}
                    <div className="productContent">
                      <h5 className="productName">
                        <Link to={"/"}>Black Fashion Zapda</Link>
                      </h5>
                      <div className="productPrice">
                        <span className="priceSale">$455.00</span>
                        <span className="priceCompare">$649.00</span>
                      </div>
                      <div className="dealProgress">
                        <div className="dealStock">
                          <span className="stockSold">
                            Already Sold: <strong>6</strong>
                          </span>
                          <span className="stockAvailable">
                            Available: <strong>39</strong>
                          </span>
                        </div>
                        <Progress value={13} />
                      </div>
                      <div className="countDownWrapper">
                        <span class="offerText">Hurry Up! Offer ends in</span>
                        <div className="countDown">
                          <CountdownTimer count={5432} showTitle hideDay />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                {/*  */}
                <Col lg="7" className="tabList">
                  {/* nav tabs */}
                  <div className="navTabWrapper">
                    <ul className="navTabs">
                      {/*  Featured */}
                      <li className="navItem">
                        <a href="/" className={clsx("navLink", "active")}>
                          Featured
                        </a>
                      </li>
                      {/*On Sale */}
                      <li className="navItem">
                        <a href="/" className="navLink">
                          On Sale
                        </a>
                      </li>
                      {/* Top Rated */}
                      <li className="navItem">
                        <a href="/" className="navLink">
                          Top Rated
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* list */}
                  <Row>
                    {homeCategories.map((e) => (
                      <Col lg="4">
                        <div className="hProductWrapper">
                          {/* product head */}
                          <div className="hProductHead">
                            <div className="productGroupVendorName">
                              <div className="productVendor">
                                <Link to={"/"} title={e.title}>
                                  {e.productVendor}
                                </Link>
                              </div>
                              <h5 className="productName">
                                <Link to={"/"}>{e.productName}</Link>
                              </h5>
                            </div>
                            <div className="featureImg">
                              <Link to={"/"}>
                                <img src={e.img} alt="" />
                              </Link>
                            </div>
                          </div>
                          {/* product content */}
                          <div className="productContent">
                            {/* priceCartWrapper */}
                            <div className="priceCartWrapper">
                              <div className="productPrice">
                                <span className="priceSale">{e.priceSale}</span>
                                <span className="priceCompare">
                                  {e.priceCompare}
                                </span>
                              </div>
                              <div className="productAdd">
                                <Link to={"/"} title={e.addCartTitle}>
                                  {e.addCartIcon}
                                </Link>
                              </div>
                            </div>
                            {/* product button */}
                            <div className="productButton">
                              <div className="quickShop">
                                <MdOutlineRemoveRedEye />
                                <span>View</span>
                              </div>
                              <div className="productWishlist">
                                <RiHeartLine />
                                <span>Wishlist</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
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
